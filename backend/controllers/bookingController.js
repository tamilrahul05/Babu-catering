const db = require('../models');
const Booking = db.Booking;
const notificationService = require('../services/notificationService');

exports.createBooking = async (req, res) => {
  try {
    const { event_date, time_slot, guests, location, event_type, total_price } = req.body;
    const user_id = req.user.id; // From auth middleware

    const booking = await Booking.create({
      event_date,
      time_slot,
      guests,
      location,
      event_type,
      total_price,
      UserId: user_id
    });

    // Send automatic notification to owner
    const user = await db.User.findByPk(user_id);
    notificationService.sendBookingNotification(booking, user);

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { UserId: req.user.id } });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ include: [db.User] });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
