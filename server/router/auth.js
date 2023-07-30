const express = require('express');
const router = express.Router();

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



// // async await

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
    // console.log(req.body);
    // res.json({ message: "awesome"});
    // res.json("awesome");

    try {
        const { email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({error:"Plz Filledthe data"})
        }

        const userLogin = await User.findOne({ email: email});

        console.log(userLogin);

        if (!userLogin){
            res.status(400).json({ error: "user error"});
        } else {
            res.json({message: "user signin Successfully"});
        }
    }
    catch (err) {
        
    }
});





exports.rout = router;