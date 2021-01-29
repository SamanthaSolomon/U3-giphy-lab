require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const app = express()
const cors = require("cors")
const giphRouter = require('./controllers/giphs.js')
const PORT = process.env.PORT || 3000

//MIDDLEWARE
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/giph', giphRouter)




app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})