
const mongoose  = require('mongoose');
to_do_Schema   = new mongoose.Schema({
    description:{
        type     : String,
        required : true
    },
    category: {
        type     : String,
        required : true
    },
    date: {
        type     : String,
        required : true
    }
});

const To_do_app  = mongoose.model('to_do_app', to_do_Schema);
module.exports = To_do_app;