const mongoose = require('mongoose');
require('dotenv').config(); // Nạp biến môi trường
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        // Ket noi voi mongodb
        await mongoose.connect('mongodb+srv://nguyenhongphucms02:6XegPo0bY1SPjZR1@cluster0.kuun6.mongodb.net/demo_api?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connect successfully!!!');

    }
    catch(error){
        console.log('Connect failure!!!',error);
        process.exit(1);
    }
};
module.exports = connectDB;