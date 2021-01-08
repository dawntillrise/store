var expressVue = require("express-vue");
const express = require('express')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const path = require('path')

require('dotenv').config()

const PORT = process.env.PORT || 80;

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoutes)

app.listen(PORT, () => {
    console.log('Server has been started...')
})