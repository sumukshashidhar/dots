const tests = require("./../controllers/testRetrieval")
module.exports = function(app) {


    app.get('/api/v1/getTests', async (req, res) => {
        // in the request parameters, we can get the
    })

    app.get('/api/v1/getSingleTest', async (req, res) => {
        // in the request parameter, we can get the test ID. If allowed
        // we can send the test back to the user, else, we can return a not due message

        const testid = req.query.testID;
        var response = await tests.getSingle(testid);
        if(response["status"] === 200) {
            res.json({
                "status":200,
                "testObject":response["testObject"],
                "message":"Successfully got the test."
            })
        }
        else if(response["status"] === 404) {
            res.json({
                "status":404,
                "message":"Test not found."
            })
        }
        else if(response["status"] === 403) {
            res.json({
                "status":403,
                "message":"Time either elapsed. Or the test is not started yet."
            })
        }
        else {
            res.json({
                "status":500,
                "message":"Internal Server Error. Contact Administrators."
            })
        }
    })
}