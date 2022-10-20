const path = require('path');
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '6681a87a1838400086a72ed63b4204f4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    },
    
    getJs: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'))
    },

    testFunc: (req, res) => {
        try {
            fakeFunc()
        } catch (error) {
            rollbar.error("Endpoint does not exist")
            res.status(400).send("Endpoint does not exist")
        }
    }
}