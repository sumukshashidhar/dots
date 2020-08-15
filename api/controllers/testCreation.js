const { nanoid } = require("nanoid");
module.exports = {
    generateTestID: async () => {
        return new Promise((res, rej) => {
            const ID = nanoid(32);
            res(ID)
        })
    }
}