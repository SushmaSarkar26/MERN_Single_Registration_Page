const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../database/db'); 
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(`Hello from the server rouer js`)
});




// use promises

// router.post('/register', (req, res) => {
//     // res.send(`Hello from the server register`)
//     // console.log(req.body);
//     // console.log(req.body.name);

//     const { name, email, phone, work, password, cpassword} = req.body;

//     if ( !name || !email || !phone || !work || !password || !cpassword ) {
//         return res.status(422).json({ error: "plz fill properly"});
//     }

//     User.findOne({ email: email})
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist"});
//             }

//         const user = new User({ name, email, phone, work, password, cpassword});

//         user.save()
//         .then(() => {
//             res.status(201).json({ message: "user registered successfuly"});
//         }).catch((err) => res.status(500).json({error: "failed to registered"}));

//         }).catch(err => { console.log(err)})


//     // console.log(name);
//     // res.json(req.body);
//     // res.status(201).json();
// });



// // async await    add data

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword} = req.body;

    if ( !name || !email || !phone || !work || !password || !cpassword ) {
        return res.status(422).json({ error: "plz fill properly"});
    }

    try {

        const userExist = await User.findOne({ email: email});

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist"});
        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching"});
        } else {
            const user = new User({ name, email, phone, work, password, cpassword});
    
            await user.save();
            res.status(201).json({ message: "user registered successfuly"});
        }

    } catch (err) {
        console.log(err);
    }

});





// login route 

router.post('/signin', async (req, res) => {
    try {
        const { email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error:"Plz Filled the data"})
        }

        const userLogin = await User.findOne({ email: email});

        // console.log(userLogin);

        if (userLogin) {
            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 258920000000),
                httpOnly: true
            });
        
            const isMatch = await bcrypt.compare(password, userLogin.password);
            
            if (!isMatch){
                return res.status(400).json({ error: "Invalid error pass"});
            } else {
                return res.json({message: "user signin Successfully"});
            } 
        }
        else {
            res.status(400).json({ error: "Invalid error"});
        }

    }
    catch (err) {
        
    }
});





exports.rout = router;