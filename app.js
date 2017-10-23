const express = require('express');
const app = express();

// Occur error manually
// throw new Error();

app.get('/', (req, res, next) => {
    res.send('hello world!');
});

module.exports = app;