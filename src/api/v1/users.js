const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('v1/users.js'));

module.exports = router;