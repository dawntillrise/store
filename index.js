const fs = require('fs');

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user')
//

require('dotenv').config()

const PORT = process.env.PORT || 80;

const app = express()


app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'client/dist')));

// set routes---------------------------------------------------------//
app.use('/api/auth/', authRoutes)
app.use('/api/users/', userRoutes)
//---------------------------------------------------------------------//

app.listen(PORT, () => {
    console.log('Server has been started...')
})