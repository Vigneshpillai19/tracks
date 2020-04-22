require('./models/User');
require('./models/track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');


const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongooseUri = 'mongodb+srv://vicky:mongodbpassword@trackpath-vnasb.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongooseUri, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB....');
});
mongoose.connection.on('error', () => {
    console.log('Error in Connecting to MongoDB....');
});


app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`);
    // res.send('You made a POST request...');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000....');
});