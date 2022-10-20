const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('client'))

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '6681a87a1838400086a72ed63b4204f4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


const { getHTML, getJs, testFunc, getError, getWarning } = require('./controller')

app.get('/', getHTML)
app.get('/js', getJs)
app.get('/test', testFunc)
app.get('/error', getError)
app.get('/warning', getWarning)




const port = process.env.PORT || 4000

app.listen(port, console.log(`Server running on ${port}`))