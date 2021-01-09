const fs = require('fs');

const express = require('express')
const homeRoutes = require('./routes/home')
const path = require('path')
const { promisify } = require('util');

require('dotenv').config()

const PORT = process.env.PORT || 80;

const app = express()


app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.use(homeRoutes)



app.listen(PORT, () => {
    console.log('Server has been started...')
})