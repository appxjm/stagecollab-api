const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING_DEV, { useNewUrlParser: true });
        console.log('MongoDB is connected');
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB;