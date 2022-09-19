// req library
const mongoose = require('mongoose');
//connect to db
require('dotenv').config();
const database = process.env.DB_URL
mongoose.connect(database); 
//acquired the connection (to check is connected or not)
const db = mongoose.connection;
//error
db.on('error' , console.error.bind(console,'error connecting to db'));

db.once('open',function(){
    console.log('successfully Connected database');
});