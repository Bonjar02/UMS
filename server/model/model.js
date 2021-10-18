const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    product : {
        type : String,
        required: true
    },
    mobile : {
        type: Number,
        require: true, 
        unique: true
    },
    price : {
        type : Number,
        required: true
    },
    status : String
})

//------------- coercion of data structure with mongodb --------------
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;