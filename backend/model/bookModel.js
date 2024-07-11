const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookSchema = new schema({
    bookName: {
        type : String,
        unique : true
    },
    bookDes: {
        type : String
    },
    bookPrice: {
        type : String
    },
    isBnNumber: {
        type : String
    },  
    authorName: {
        type: String
    },
    bookImg : {
        type : String 
    }
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book