const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    testID:String,
    questionID:String,
    questionText:String,
    questionImage:{type:String, default:undefined},
    questionOptions:Array,
    questionAnswer:Number
})

module.exports = mongoose.model("question", questionSchema)