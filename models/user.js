// const mongoose = require ("../configuration/dbConfig");


//     const userSchema = new mongoose.Schema({
//         name:String,
//         email:String,
//         phone:String

//     });

//     const User = mongoose.model('User',userSchema);

//     module.exports = User;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

