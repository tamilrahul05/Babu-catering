module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    event_date: { type: DataTypes.DATEONLY, allowNull: false },
    time_slot: { type: DataTypes.STRING, allowNull: false },
    guests: { type: DataTypes.INTEGER, allowNull: false },
    location: { type: DataTypes.TEXT, allowNull: false },
    event_type: { type: DataTypes.STRING, allowNull: false },
    total_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'), defaultValue: 'pending' },
    payment_status: { type: DataTypes.ENUM('pending', 'partial', 'paid'), defaultValue: 'pending' }
  });
  return Booking;
};
