const test = require("./../models/test")
module.exports = {
    getSingle: async (testID) => {
        return new Promise((resolve, reject) => {
            // first retrieve the test
            test.findOne({testID:testID}, (err, obj) => {
                if(err) {
                    console.error(err)
                    reject(err)
                }
                else {
                    if (obj !== undefined) {
                        // if we reached here, that means that the test is valid and exists.
                        // now we need to check if it hasn't elapsed the time, or hasn't begun yet
                        console.log("Retrieved TestID: ", testID)
                        // checking time stuff
                        var currentDateTime = new Date()
                        if(obj["testDueTime"] < currentDateTime && obj["testEndTime"] > currentDateTime) {
                            // this means that the test is currently valid
                            resolve({
                                "status": 200,
                                "testObject": obj
                            })
                        }
                        else {
                            resolve({
                                "status":403
                            })
                        }
                    }
                    else {
                        resolve({
                            "status":404
                        })
                    }
                }
            })
        })

    }
}