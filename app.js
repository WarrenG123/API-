 require('dotenv').config;

const express = require('express');
const app = express();
const routes = require('./routes/routes');
const connection = require('./config/database');

app.use(express.json());

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});


app.use('/api', routes);

app.listen(3000, () => console.log('listening on port 3000'));