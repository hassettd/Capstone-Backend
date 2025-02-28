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
    {
      brand: "Patek Philippe",
      model: "Calatrava",
      strapMaterial: "Alligator Leather",
      metalColor: "Rose Gold",
      movement: "Manual",
      caseSize: 39,
      price: 29000,
      title: "Patek Philippe Calatrava",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user3@example.com",
                password: "password789",
                name: "Alice Smith",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Audemars Piguet",
      model: "Royal Oak",
      strapMaterial: "Rubber",
      metalColor: "Steel",
      movement: "Automatic",
      caseSize: 44,
      price: 22000,
      title: "Audemars Piguet Royal Oak",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user4@example.com",
                password: "password101",
                name: "Bob Johnson",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Tag Heuer",
      model: "Carrera",
      strapMaterial: "Leather",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 41,
      price: 3500,
      title: "Tag Heuer Carrera",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user5@example.com",
                password: "password102",
                name: "Charlie Brown",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Breitling",
      model: "Navitimer",
      strapMaterial: "Stainless Steel",
      metalColor: "Black",
      movement: "Automatic",
      caseSize: 43,
      price: 4500,
      title: "Breitling Navitimer",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user6@example.com",
                password: "password103",
                name: "David Lee",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "IWC",
      model: "Pilot's Watch",
      strapMaterial: "Canvas",
      metalColor: "Titanium",
      movement: "Automatic",
      caseSize: 44,
      price: 7000,
      title: "IWC Pilot's Watch",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user7@example.com",
                password: "password104",
                name: "Eva Green",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Jaeger-LeCoultre",
      model: "Reverso",
      strapMaterial: "Alligator Leather",
      metalColor: "Steel",
      movement: "Manual",
      caseSize: 40,
      price: 9500,
      title: "Jaeger-LeCoultre Reverso",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user8@example.com",
                password: "password105",
                name: "Frank Harris",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Cartier",
      model: "Santos de Cartier",
      strapMaterial: "Leather",
      metalColor: "Yellow Gold",
      movement: "Automatic",
      caseSize: 39,
      price: 11500,
      title: "Cartier Santos de Cartier",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user9@example.com",
                password: "password106",
                name: "Grace White",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Hublot",
      model: "Big Bang",
      strapMaterial: "Rubber",
      metalColor: "Black",
      movement: "Automatic",
      caseSize: 45,
      price: 14000,
      title: "Hublot Big Bang",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user10@example.com",
                password: "password107",
                name: "Hannah Black",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Vacheron Constantin",
      model: "Overseas",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 41,
      price: 18000,
      title: "Vacheron Constantin Overseas",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user11@example.com",
                password: "password108",
                name: "Isaac Adams",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Panerai",
      model: "Luminor",
      strapMaterial: "Leather",
      metalColor: "Green",
      movement: "Manual",
      caseSize: 44,
      price: 7000,
      title: "Panerai Luminor",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user12@example.com",
                password: "password109",
                name: "Jack Harris",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Seiko",
      model: "Presage",
      strapMaterial: "Leather",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 40,
      price: 500,
      title: "Seiko Presage",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user13@example.com",
                password: "password110",
                name: "Katie Martin",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Casio",
      model: "G-Shock",
      strapMaterial: "Resin",
      metalColor: "Black",
      movement: "Quartz",
      caseSize: 48,
      price: 100,
      title: "Casio G-Shock",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user14@example.com",
                password: "password111",
                name: "Liam Walker",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Tudor",
      model: "Black Bay",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 41,
      price: 3800,
      title: "Tudor Black Bay",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user15@example.com",
                password: "password112",
                name: "Mason Scott",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Girard-Perregaux",
      model: "Laureato",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 42,
      price: 11000,
      title: "Girard-Perregaux Laureato",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user16@example.com",
                password: "password113",
                name: "Nina Taylor",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Bell & Ross",
      model: "BR 03-92",
      strapMaterial: "Rubber",
      metalColor: "Black",
      movement: "Automatic",
      caseSize: 42,
      price: 2200,
      title: "Bell & Ross BR 03-92",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user17@example.com",
                password: "password114",
                name: "Olivia Martinez",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Breguet",
      model: "Classique",
      strapMaterial: "Leather",
      metalColor: "Yellow Gold",
      movement: "Manual",
      caseSize: 39,
      price: 24000,
      title: "Breguet Classique",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user18@example.com",
                password: "password115",
                name: "Paul Evans",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Rolex",
      model: "Daytona",
      strapMaterial: "Leather",
      metalColor: "Black",
      movement: "Automatic",
      caseSize: 40,
      price: 12000,
      title: "Rolex Daytona",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user19@example.com",
                password: "password116",
                name: "Quincy Ford",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Omega",
      model: "Speedmaster",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Manual",
      caseSize: 42,
      price: 5000,
      title: "Omega Speedmaster",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user20@example.com",
                password: "password117",
                name: "Rachel Mitchell",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Longines",
      model: "Master Collection",
      strapMaterial: "Leather",
      metalColor: "Steel",
      movement: "Automatic",
      caseSize: 40,
      price: 3500,
      title: "Longines Master Collection",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user21@example.com",
                password: "password118",
                name: "Sam Davis",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Citizen",
      model: "Eco-Drive",
      strapMaterial: "Rubber",
      metalColor: "Blue",
      movement: "Solar",
      caseSize: 45,
      price: 200,
      title: "Citizen Eco-Drive",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user22@example.com",
                password: "password119",
                name: "Tina Lee",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Fossil",
      model: "Hybrid HR",
      strapMaterial: "Leather",
      metalColor: "Brown",
      movement: "Hybrid",
      caseSize: 42,
      price: 180,
      title: "Fossil Hybrid HR",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user23@example.com",
                password: "password120",
                name: "Uma Rodriguez",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Hamilton",
      model: "Khaki Field",
      strapMaterial: "Canvas",
      metalColor: "Khaki",
      movement: "Automatic",
      caseSize: 42,
      price: 600,
      title: "Hamilton Khaki Field",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user24@example.com",
                password: "password121",
                name: "Victor White",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Bulova",
      model: "Precisionist",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Quartz",
      caseSize: 43,
      price: 400,
      title: "Bulova Precisionist",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user25@example.com",
                password: "password122",
                name: "Wendy Clark",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "TAG Heuer",
      model: "Aquaracer",
      strapMaterial: "Rubber",
      metalColor: "Blue",
      movement: "Quartz",
      caseSize: 43,
      price: 2500,
      title: "TAG Heuer Aquaracer",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user26@example.com",
                password: "password123",
                name: "Xander Harris",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Tissot",
      model: "Le Locle",
      strapMaterial: "Leather",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 39,
      price: 600,
      title: "Tissot Le Locle",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user27@example.com",
                password: "password124",
                name: "Yvonne King",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Victorinox",
      model: "Swiss Army",
      strapMaterial: "Rubber",
      metalColor: "Black",
      movement: "Quartz",
      caseSize: 42,
      price: 250,
      title: "Victorinox Swiss Army",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user28@example.com",
                password: "password125",
                name: "Zane Green",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Mido",
      model: "Ocean Star",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Automatic",
      caseSize: 42,
      price: 800,
      title: "Mido Ocean Star",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user29@example.com",
                password: "password126",
                name: "Alice Turner",
                role: "USER",
              },
            }
          : undefined,
    },
    {
      brand: "Movado",
      model: "Museum",
      strapMaterial: "Stainless Steel",
      metalColor: "Silver",
      movement: "Quartz",
      caseSize: 40,
      price: 1500,
      title: "Movado Museum",
      user:
        Math.random() > 0.5
          ? {
              create: {
                email: "user30@example.com",
                password: "password127",
                name: "Brandon Young",
                role: "USER",
              },
            }
          : undefined,
    },
  ];

  // Insert the watches into the database
  for (const watch of watches) {
    // Use findFirst since 'model' is not unique
    const existingWatch = await prisma.item.findUnique({
      where: { model: watch.model }, // Find by 'model'
    });

    if (existingWatch) {
      await prisma.item.delete({
        where: { id: existingWatch.id }, // Delete the existing watch by 'id'
      });
    }

    // Now insert the new record
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
        user: watch.user ? watch.user : undefined,
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
