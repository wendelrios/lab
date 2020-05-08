const express = require('express');
const app = express();

app.use(express.json())

const index = require('./src/routes/index')

app.all('/',index.router.get)



module.exports = app





