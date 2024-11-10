//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Title: String,
    Author: String,
    Genre: String
},
{
    collection:"books"
});
module.exports =mongoose.model('Book',bookModel);
