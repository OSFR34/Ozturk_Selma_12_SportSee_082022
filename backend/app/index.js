const express = require('express')
const cors = require('cors')
const data = require('./data')

const router = require('./routes')
const users = require('./data')

const app = express()

app.use(cors())
const port = 3001



app.use(router)



app.listen(port, () => console.log(`Magic happens on port ${port}`))
