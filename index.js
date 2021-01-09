const fs = require('fs');

const express = require('express')
const homeRoutes = require('./routes/home')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT || 80;

const app = express()


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.use(homeRoutes)


app.listen(PORT, () => {
    console.log('Server has been started...')
})