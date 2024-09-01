const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Chal gaya Db')
    } catch (error) {
        console.log('Nahi chala DB');
    }
}

module.exports = {db}