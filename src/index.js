require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const v1 = require('./api/v1/v1');
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/v1', v1);

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));