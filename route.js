const express = require('express')
const router = express.Router()
const data = require('./data/movie')
const path = require("path")
const session = require('express-session');


router.get('/', (req, res) => {
    res.render('index.ejs', {data:data})
    console.Console(data)
})

router.get('/download', (req, res) => {
    res.render('download.ejs', {data:data})
    console.Console(data)
})

router.get('/download/:id', (req, res) => {
    let found = data.some(data => data.id === parseInt(req.params.id))
    if (found) {
        res.download(path.join(__dirname, '/public/assets/image/' + req.params.id + '.jpg'))
    } else {
        res.redirect('/error')
    }
})


router.use(session({
    secret: 'token',
    cookie: {
        maxAge: 60000000
    },
    resave: true,
    saveUninitialized: false
}))

function user(username, password) {
    if (username == "admin" && password == "Web999") {
        return true;
    } else if (username == "commu" && password == "Cosci7749") {
        return true;
    } else {
        return false;
    }
}

router.get('/login', function (req, res) {
    const _username = req.query.username
    const _password = req.query.password

    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.redirect("/")
    }

    if (user(req.query.username, req.query.password) == true) {
        req.session.username = req.query.username
        req.session.isLoggedIn = true
        res.redirect("/")
    } else {
        res.send("หน้า Login")
    }
})

router.get('/api/movie/:id', (req, res) => {
    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {  
        let found = data.some(data => data.id === parseInt(req.params.id))  
        if (found) {
            var currentmovie = data.filter(data => data.id === parseInt(req.params.id))
            res.render('movie.ejs', {data:currentmovie})
            console.log(currentmovie)
        } else {
            res.redirect('/error')
        }
    } else {
        res.redirect('/login')
    }
})

router.get('/logout', function (req, res) {
    req.session.destroy(); //ทิ้ง session
    res.redirect("/login");
    console.log("TEST")
})

module.exports = router