const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const askApi = require('./api/ask');
const feedbackApi = require('./api/feedback');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/ask', askApi);
app.use('/api/feedback', feedbackApi);

module.exports = app;