const fs = require('fs');
const Vue = require('vue');
const express = require('express')
const homeRoutes = require('./routes/home')
const path = require('path')
const { promisify } = require('util');

require('dotenv').config()

const PORT = process.env.PORT || 80;

const app = express()


const template = require('fs').readFileSync('views/layouts/main.html', 'utf-8');

const { renderToString } = require('vue-server-renderer').createRenderer({
	template
});

const context = { title: 'Store' }

app.engine('template', function templateEngine(filePath, options, callback) {
	(async function() {
	  const content = await promisify(fs.readFile).call(fs, filePath, 'utf8');
	  const app = new Vue({ template: content, data: options });
	  
	  const html = await renderToString(app, context);
  
	  callback(null, html);
	})().catch(err => callback(err));
});

app.set('view engine', 'template');
app.set('views', 'views')


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoutes)

app.listen(PORT, () => {
    console.log('Server has been started...')
})