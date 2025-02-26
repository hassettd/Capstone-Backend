const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const watches = [
    {
      brand: "Rolex",
      model: "Submariner",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 41,
      price: 8000,
      title: "Rolex Submariner",
      // Optionally connect a user or create a new user
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user1@example.com",
                password: "password123",
                name: "John Doe",
                role: "USER",
              },
            }
          : undefined, // This line makes the user optional
    },
    {
      brand: "Omega",
      model: "Seamaster",
      strapMaterial: "Leather",
      metalColor: "Blue",
      movement: "Automatic",
      caseSize: 42,
      price: 5000,
      title: "Omega Seamaster",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user2@example.com",
                password: "password456",
                name: "Jane Doe",
                role: "USER",
              },
            }
          : undefined, // This line makes the user optional
    },
  ];

  // Insert the watches into the database
  for (const watch of watches) {
    await prisma.item.create({
      data: {
        brand: watch.brand,
        model: watch.model,
        strapMaterial: watch.strapMaterial,
        metalColor: watch.metalColor,
        movement: watch.movement,
        caseSize: watch.caseSize,
        price: watch.price,
        title: watch.title,
        user: watch.user ? watch.user : undefined, // User is optional
      },
    });
  }
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
