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

    getProductHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/product.html'))
    },

    testFunc: (req, res) => {
        try {
            fakeFunc()
        } catch (error) {
            rollbar.error("Endpoint does not exist")
            res.status(400).send(error)
        }
    },

    getError: (req, res) => {
        try {
            errorFunc()
        } catch (error) {
            rollbar.critical("No endpoint 'error'")
            res.status(400).send("No endpoint 'error'")
        }
    },

    getWarning: (req, res) => {
        try {
            warningFunc()
        } catch (error) {
            rollbar.warning("Endpoint 'warning' does not exist")
            res.status(400).send("Endpoint 'warning' does not exist")
        }
    }

}