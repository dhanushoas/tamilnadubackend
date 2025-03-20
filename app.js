const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Use environment variables for sensitive information
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://dhanushkrock:Hb76UwwZTsFNXOWP@cluster0.gbp6t.mongodb.net/test_db?retryWrites=true&w=majority";

// Import middleware and routes
/* const authenticationMiddleware = require('./middleware/authentication'); */
const imageRoutes = require('./routes/image');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const bookRoutes = require('./routes/book');
const selectedPlaceRoutes = require('./routes/selectedPlace');
const paymentRoutes = require('./routes/payment');

// Use middleware
app.use(bodyParser.json());
app.use(cors());
/* app.use(authenticationMiddleware); */

// Use routes
app.use('/image', imageRoutes);
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
app.use('/api/visits', selectedPlaceRoutes);
app.use('/pay', paymentRoutes);
app.use('/admin', adminRoutes); // Use adminRoutes here

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { /* useNewUrlParser: true, useUnifiedTopology: true  */});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
