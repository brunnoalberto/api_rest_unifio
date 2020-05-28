const express = require('express');
const app = express();
const morgan = require('morgan');
const personRoutes = require('../routes/PersonRoutes');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('tiny'));

app.use('/api', personRoutes);

module.exports = app;