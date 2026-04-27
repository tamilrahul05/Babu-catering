const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require('./User')(sequelize, Sequelize);
db.MenuItem = require('./MenuItem')(sequelize, Sequelize);
db.Booking = require('./Booking')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Booking);
db.Booking.belongsTo(db.User);

module.exports = db;
