const express = require("express");
const morgan = require("morgan");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const uuid = require("uuid");

const prisma = new PrismaClient();
const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Example route for user registration
app.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
});

// Example route for login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(400).json({ error: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Invalid password" });

  res.status(200).json({ message: "Logged in successfully", user });
});

// Example route for creating an item
app.post("/items", async (req, res) => {
  const {
    brand,
    model,
    strapMaterial,
    metalColor,
    movement,
    caseSize,
    price,
    categoryId,
  } = req.body;

  try {
    const item = await prisma.item.create({
      data: {
        brand,
        model,
        strapMaterial,
        metalColor,
        movement,
        caseSize,
        price,
        categoryId,
      },
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: "Error creating item" });
  }
});

// Route for getting items with pagination
app.get("/items", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const items = await prisma.item.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });

  res.json(items);
});

// Add more routes as per other requirements (review, admin routes, etc.)

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:3000");
});
