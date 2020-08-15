var mongoose = require("mongoose");

var testSchema = new mongoose.Schema({
    testID:String,
    testName:String,
    testDueTime:Date,
    testEndTime:Date,
    testQuestions:Array
})

module.exports = mongoose.model("test", testSchema)