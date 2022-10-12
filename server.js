const express = require('express');
const app = express();
const path = require('path');
const router = require('./route')


app.use(router)
app.use(express.static("public"));
app.set('views', path.join(__dirname, './public/views'))
app.set('view engine', 'ejs')

app.use(function(req, res, error) {
    res.sendFile(path.join(__dirname, "/public/views/page_not_found.html"));
})

app.listen(5005, () => {
    console.log('Server started seccess')
})




