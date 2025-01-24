const mongoose = require("mongoose")
const dotenv = require("dotenv");

// load env configuration
dotenv.config();

//Connect to MongoDB
const connectDb = async () => {
mongoose.connect(process.env.DBURI).then(() => {
    console.log(`Connected Database Successfully....`);
    app.listen(process.env.PORT,() => {
        console.log(`Server is running at ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MongDB is not connected.Please Inform Your Connection....");
})}

module.exports = connectDb;