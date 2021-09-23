require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));