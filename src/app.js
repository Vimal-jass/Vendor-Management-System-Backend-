const express = require('express')
const connectDB = require("./db/db")
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/user.routes')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

connectDB()
app.use(express.json())
app.use(cookieParser())


app.use('/api', authRoutes)



module.exports = app;