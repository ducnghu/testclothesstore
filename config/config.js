
const mongoose = require("mongoose")
const PORT = process.env.PORT || 8080; // Step 1

// Step 2
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


const dev_db_url = "mongodb+srv://ducnghu:ducnghu18120165@cluster0.3cbcn.mongodb.net/ClothesStore?retryWrites=true&w=majority"
const mongodb = process.env.MONGODB_URI || dev_db_url;
async function connect(){
    try {
        await mongoose.connect(mongodb,{
              useNewUrlParser: true,
              useUnifiedTopology: true,
              //useCreateIndex: true,
        })
        console.log("connected")
    } catch (error) {
        console.log("failed")
    }
}

module.exports = {connect}
