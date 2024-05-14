const express = require('express');
const router = express.Router();
const User = require("./models/User");
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    let(name , email ,number , username , password) = req.body
    name = name.trim()
    email = email.trim()
    number = number.trim()
    username = username.trim()
    password = password.trim()
    User.find({username}).then(result => {
        if(result.length){
            return res.status(400).json({
                message : "Username already exists"
            })
        }else{
            bcrypt.hash(password, 10).then(hashedPassword => {
                const user = new User({
                    name,
                    email,
                    number,
                    username,
                    password: hashedPassword
                })
                user.save().then(result => {
                    res.json({
                        message : "User created successfully",
                        data:result
                    })
                })
            })
        

        }
    })
})
router.post('/login', (req, res) => {
    let(    username , password) = req.body
   
    username = username.trim()
    password = password.trim()
    User.find({username}).then(data => {
        if(data)
            const hashedPassword = data[0].password
            bcrypt.compare(password, hashedPassword).then(result => {
                if(result){
                    res.json({
                        message : "Login successful",
                        data:data
                    })
                }else{
                    res.json({
                    message:"invalid username or password"
                })
            })
        
    })