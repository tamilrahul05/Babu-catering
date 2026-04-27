require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/booking'));
app.use('/api/menu', require('./routes/menu'));

// Serve Static Files from Frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to serve index.html (for SPA routing)
app.get('*', (req, res) => {
  if (!req.url.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
  } else {
    res.status(404).json({ message: 'API route not found' });
  }
});

// Sync Database
db.sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.log('Failed to sync database: ' + err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
