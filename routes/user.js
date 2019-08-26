const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
process.env.SECRET_KEY = 'secret'
router.post('/register', (req, res) => {
    console.log('user signup');
    console.log(req.body)
    const today = new Date()
    // const userData = {
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     email: req.body.email,
    //     password: req.body.password,
    //     created: today
    // }

    const { username, password, first_name, last_name } = req.body
    // ADD VALIDATION
    // User.findOne({ username: username }, (err, user) => {
    //     if (err) {
    //         console.log('User.js post error: ', err)
    //     } else if (user) {
    //         console.log('Sorry, already a user with the username ')
    //         res.json({

    //             error: `Sorry, already a user with the username: ${username}`
    //         })
    //     }
    //     else {
    //         const newUser = new User({
    //             first_name,
    //             last_name,
    //             username: username,
    //             password: password
    //         })
    //         console.log("req.body.password")
    //         console.log(req.body.password)
    //         bcrypt.hash(req.body.password, 10, (err, hash) => {
    //             newUser.password = hash
    //             User.create(newUser)
    //                 .then(user => {
    //                     res.json({ status: user.email + 'Registered!' })
    //                 })
    //                 .catch(err => {
    //                     res.send('error: ' + err)
    //                 })
    //         })
    //     }
    // })

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(username).toLowerCase()) && password.length > 7) {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log('User.js post error: ', err)
            } else if (user) {
                console.log('Sorry, already a user with the username ')
                res.json({

                    error: `Sorry, already a user with the username: ${username}`
                })
            }
            else {
                const newUser = new User({
                    username: username,
                    password: password,
                    first_name: first_name,
                    last_name: last_name
                })
                console.log("req.body.password")
                console.log(req.body.password)
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    newUser.password = hash
                    User.create(newUser)
                        .then(user => {
                            console.log("user created")
                            res.json({ status: user.email + 'Registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            }
        })
    }

})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    // (req, res) => {
    //     console.log('logged in', req.user);
    //     var userInfo = {
    //         _id: req.user._id,
    //         email: req.user.username
    //     };

    //     let token = jwt.sign(userInfo, process.env.SECRET_KEY, {
    //         expiresIn: '604800'
    //     })

    //     res.send(token);
    // }

    (req, res) => {
        console.log('logged in', req.user);
        User.findOne({
            username: req.user.username
        })
            .then(user => {

                console.log("user info under post /login")
                console.log(user)
                var userInfo = {
                    _id: user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                };

                let token = jwt.sign(userInfo, process.env.SECRET_KEY, {
                    expiresIn: '604800'
                })
                console.log(token)
                res.send(token);
            })





    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!! PATH /======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.get('/Profile', checkAuthentication, (req, res, next) => {
    console.log('===== user!!/Profile======')
    console.log('===== user!!/Profile======')
    console.log('===== user!!/Profile======')
    // console.log(req)
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        console.log("logging out")
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

function checkAuthentication(req, res, next) {
    console.log("REQ.AUTHENTICATED")
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        console.log("checkAuthentication SUCCESS")
        next();
    } else {
        console.log("checkAuthentication FAILED")
    }
}

module.exports = router