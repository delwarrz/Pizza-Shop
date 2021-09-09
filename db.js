const mongoose = require('mongoose');

let mongoUrl = 'mongodb+srv://delwar:dh1234@cluster0.suax8.mongodb.net/pizza-shop';

mongoose.connect(mongoUrl, {useUnifiedTopology:true, useNewUrlParser:true});

let db = mongoose.connection;

db.on('connected', () => {
    console.log("DB connected successfully!");
});

db.on('error', () => {
    console.log("Database connection failed!");
})

module.exports = mongoose;