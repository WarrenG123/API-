// app.js or index.js

const express = require('express');
const app = express();
const routes = require('../newwww/routes/routes');

app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => console.log('listening on port 3000'));