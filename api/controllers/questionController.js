const { nanoid } = require("nanoid");
const question = require("./../models/question")
const test = require("./../models/test")

async function generateQuestionID() {
    return new Promise(async (res, rej) => {
        res(await nanoid(10));
    })
}
module.exports = {


    createQuestion: async (questionText, questionOptions, questionAnswer, questionTest, questionImage,) => {
        // we don't really need to wait for this to happen, and it can happen in the background, so why
        // stop the user, let the user continue adding
        // first, let us generate a question id
        const newQuestion = new question({
            questionText:questionText,
            questionOptions:questionOptions,
            testID:questionTest,
            questionAnswer:questionAnswer,
            questionImage:questionImage,
            questionID: await generateQuestionID()
        })

        newQuestion.save((err, obj) => {
            if(err) {
                console.error(err)
            }
            else{
                //means that this particular question was created, let us now
                // add this question to the list of questions in the test
                // we need to first get the object, and then update it
                test.findOne({testID:questionTest}, {testQuestions: 1}, (err2, test_obj) => {
                    if(err3) {
                        console.error(err2)
                    }
                    else {
                        console.log(obj) // need to check how this format is
                        test_obj["testQuestions"].push(obj["questionID"])
                        test.findOneAndUpdate({testID:questionTest}, {$set: {testQuestions:test_obj["testQuestions"]}}, (err3, final) => {
                            if(err3) {
                                console.log(err3)
                            }
                            // if it reaches here, all the updates are done and it all works like a charm
                        })
                    }
                })
            }
        })
    }
}