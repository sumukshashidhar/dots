const { nanoid } = require("nanoid");
const question = require("./../models/question")
module.exports = {
    generateQuestionID: async () => {
        return new Promise(async (res, rej) => {
            res(await nanoid(10));
        })
    },


    createQuestion: async (questionText, questionOptions, questionAnswer, questionTest, questionImage,) => {
        return new Promise(async (res, rej) => {
            // first, let us generate a question id
            const newQuestion = new question({
                questionText:questionText,
                questionOptions:questionOptions,
                testID:questionTest,
                questionAnswer:questionAnswer,
                questionImage:questionImage
            })

            newQuestion.save((err, obj) => {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    res(true)
                }
            })
        })
    }
}