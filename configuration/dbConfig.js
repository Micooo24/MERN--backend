//dbConfig.js

// const mongoose = require('mongoose');   

//     mongoose.connect('mongodb://127.0.0.1:27017/shoshable_db',{
//     });

//     mongoose.connection.on('connected',() => {
//         console.log('Connected to MongoDB');
//     });

//     mongoose.connection.on('error',(err) => {
//         console.log('Error connecting to MongoDB',err);
//     });

//     module.exports = mongoose;  

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoute');

// const app = express();

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/shoeshable_db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Failed to connect to MongoDB', err);
// });

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Register the user routes
// app.use('/api',userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shoeshable_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


