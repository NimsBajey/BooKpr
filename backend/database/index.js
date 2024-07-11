const mongoose = require('mongoose');
const key = "mongodb+srv://mad123man456:Paisagayo@cluster0.7rnearl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = async()=> {
        await mongoose.connect(key)
        console.log("Database connected.");
}

module.exports = connectDb