const express = require('express');
const app = express();
let a = 0;
const apicache = require('apicache');
const cache = apicache.middleware;


// Occur error manually
// throw new Error();

app.get('/', cache('5 seconds'), (req, res, next) => {
    res.send('hello world!' + a++);
});
app.post('/', cache('5 seconds'), (req, res, next) => {
    res.send('hello world!' + a++);
});

module.exports = app;