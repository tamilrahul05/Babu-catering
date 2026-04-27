const db = require('./models');

const seedMenu = async () => {
  try {
    await db.sequelize.sync({ force: true });
    
    const menuItems = [
      // Veg Plates
      {
        name: 'Basic Veg Plate',
        type: 'Veg',
        category: 'Lunch',
        price: 150,
        description: 'Rice, Sambar, Rasam, 1 Poriyal, Curd, Pickle',
        image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=500'
      },
      {
        name: 'Standard Veg Plate',
        type: 'Veg',
        category: 'Lunch',
        price: 220,
        description: 'Rice + Sambar + Rasam, 2 Poriyal, Chapati + Kurma, Sweet (1), Curd',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500'
      },
      {
        name: 'Premium Veg Plate',
        type: 'Veg',
        category: 'Lunch',
        price: 300,
        description: 'Welcome Drink, Veg Meals (Full), Paneer Dish, Chapati + Kurma, Sweet + Ice Cream, Fruits',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500'
      },
      // Non-Veg Plates
      {
        name: 'Basic Non-Veg Plate',
        type: 'Non-Veg',
        category: 'Lunch',
        price: 250,
        description: 'Chicken Biryani, Onion Raita, Brinjal Gravy',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500'
      },
      {
        name: 'Standard Non-Veg Plate',
        type: 'Non-Veg',
        category: 'Lunch',
        price: 350,
        description: 'Chicken Biryani, Chicken Gravy, Veg Side Dish, Sweet, Soft Drink',
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500'
      },
      {
        name: 'Premium Non-Veg Plate',
        type: 'Non-Veg',
        category: 'Lunch',
        price: 500,
        description: 'Mutton Biryani, Chicken Gravy, Fish Fry, Veg Starters, Sweet + Ice Cream, Juice',
        image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?w=500'
      },
      // Special Events
      {
        name: 'Wedding Special Plate',
        type: 'Veg',
        category: 'Dinner',
        price: 600,
        description: 'Welcome Drink, Full Meals + Biryani, 2 Sweets, Ice Cream, Appalam + Pickle',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500'
      },
      {
        name: 'Birthday / Party Plate',
        type: 'Non-Veg',
        category: 'Dinner',
        price: 300,
        description: 'Fried Rice / Biryani, Noodles, Starter, Cake (optional), Soft Drinks',
        image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500'
      }
    ];

    await db.MenuItem.bulkCreate(menuItems);
    console.log('Database seeded with Plate Cost System successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedMenu();
