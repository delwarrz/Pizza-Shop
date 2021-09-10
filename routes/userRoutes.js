const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');

router.post("/register", async(req, res) => {
    const {name, email, password} = req.body;
    const newUser = new User({name, email, password});

    try{
        newUser.save();
        return res.send("User Registered Successfully!");
    }catch(error){
        return res.status(400).json({message: error});
    }
});

router.post("/login", async(req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.find({email, password});
        if(user.length > 0){
            const currentUser = {
                _id: user[0]._id,
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin
            }
            return res.send(currentUser);
        }else{
            return res.status(400).json({message: "Incorrect Email or Password!"});
        }
    }catch(error){
        return res.status(400).json({message: error});
    }
});

module.exports = router;