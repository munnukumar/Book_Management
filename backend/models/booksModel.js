const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please Enter book title"],
        trim:true
    },
    author:{
        type:String,
        required:[true, "Please Enter author"],
        trim:true
    },
    summary:{
        type:String,
        required:[true, "Please Enter summary about book"],
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("book", bookSchema)
