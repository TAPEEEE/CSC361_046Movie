const express = require('express');
const app = express();
const path = require('path');


function user(username, password) {
    if (username == "admin" && password == "Web999") {
        return true;
    } else if (username == "commu" && password == "Cosci7749") {
        return true;
    } else {
        return false;
    }
}

const session = require('express-session');
app.use(session({
    secret: 'token',
    cookie: {
        maxAge: 60000000
    },
    resave: true,
    saveUninitialized: false
}))

app.get('/login', function (req, res) {
    const _username = req.query.username
    const _password = req.query.password

    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.redirect("/profile")
    }

    if (user(req.query.username, req.query.password) == true) {
        req.session.username = req.query.username
        req.session.isLoggedIn = true
        res.redirect("/profile")
    } else {
        res.send("หน้า Login")
    }
})

app.get('/profile', function (req, res) {
    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.end("Profile of: " + req.session.username);
    } else {
        res.redirect("/login");
    }
})

app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect("/login");
})

app.get("/", function (req, res) {
    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.redirect("/profile");
    } else {
        res.redirect("/login");
    }
})

app.use(function(req, res, error) {
    res.sendFile(path.join(__dirname, "../public/page_not_found.html"));
})

app.listen(5005, () => {
    console.log('Server started seccess')
})

