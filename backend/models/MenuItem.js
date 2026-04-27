module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false }, // Breakfast, Lunch, Dinner
    type: { type: DataTypes.STRING, allowNull: false }, // Veg, Non-Veg
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    description: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING }
  });
  return MenuItem;
};
