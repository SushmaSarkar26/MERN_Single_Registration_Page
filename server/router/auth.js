const express = require('express');
const router = express.Router();

require('../database/db'); 
const User = require('../model/userSchema');


router.get('/', (req, res) => {
    res.send(`Hello from the server rouer js`)
});

router.post('/register', (req, res) => {
    // res.send(`Hello from the server register`)
    // console.log(req.body);
    // console.log(req.body.name);

    const { name, email, phone, work, password, cpassword} = req.body;
    if ( !name || !email || !phone || !work || !password || !cpassword ) {
        return res.status(422).json({ error: "plz fill properly"});
    }

    User.findOne({ email: email})
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Email already Exist"});
            }

        const user = new User({ name, email, phone, work, password, cpassword});

        user.save()
        .then(() => {
            res.setMaxListeners(201).json({ message: "user registered successfuly"});
        }).catch((err) => res.status(500).json({error: "failed to registered"}));

        }).catch(err => { console.log(err)})




    // console.log();
    // console.log(name);
    // res.json(req.body);
    // res.status(201).json(); 




});


// module.express = router;
exports.rout = router;