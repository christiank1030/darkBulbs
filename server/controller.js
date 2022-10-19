const path = require('path')

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'));
    },
    
    getJs: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/main.js'))
    }
}