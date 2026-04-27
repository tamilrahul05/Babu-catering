const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendBookingNotification = async (booking, user) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: '9025237677@gmail.com', // Placeholder or owner email
    subject: `New Order Received - ${booking.event_type}`,
    text: `
      NEW ORDER RECEIVED!
      
      Order Details:
      - Event: ${booking.event_type}
      - Date: ${booking.event_date}
      - Guests: ${booking.guests}
      - Location: ${booking.location}
      - Total Price: ₹${booking.total_price}
      
      Customer Details:
      - Name: ${user.name}
      - Phone: ${user.phone}
      - Email: ${user.email}
    `
  };

  try {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
      console.log('Notification email sent to owner');
    }
  } catch (error) {
    console.error('Email notification failed:', error);
  }
};
