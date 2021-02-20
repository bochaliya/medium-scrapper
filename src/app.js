const express = require('express');
const app = express();
const scrap = require('./services/scrapper.js');

//routes
app.get('/', scrap.main);

app.listen(3000);