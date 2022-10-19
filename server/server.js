const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('client'))

const { getHTML, getJs } = require('./controller')

app.get('/', getHTML)
app.get('/js', getJs)




const port = process.env.PORT || 4000

app.listen(port, console.log(`Server running on ${port}`))