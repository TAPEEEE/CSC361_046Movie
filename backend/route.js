const express = require('express');
const app = express();

var router = require('./server')
app.use('/login', router)

app.listen(5005, () => {
    console.log('Server started seccess')
})