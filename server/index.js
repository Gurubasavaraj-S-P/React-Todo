const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./userModel");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

mongoose.connect("mongodb://127.0.0.1:27017/fda", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connected!`);
    }).catch((err) => {
        console.log(err);
    })

app.post('/login', async (req,res) => {
    console.log(req.body);
    User.findOne({user: req.body.username}).then((s) => {
        if(s === null){
            res.status(200).send(`NUF`);
            return
        }
        if(req.body.password != s.password){
            res.status(200).send('NUF');
            return
        }

        if(req.body.password === s.password){
            res.status(200).send('tq');
        }
    })
})

app.post('/register', async (req, res) => {
    console.log(req.body);
    User.findOne({user: req.body.username}).then( async(s) => {
        if(s === null){
            let u = new User({
                user: req.body.username,
                email: req.body.email,
                password: req.body.password
            })

            await u.save();
            res.status(200).send("UC");
        }else{
            res.status(200).send("UAE");
        }
    })
})

app.post('/newtask', async (req, res) => {
    console.log(req.body);
    let da = `${Date.now()}`;
    await User.findOneAndUpdate(
        { user: "gurubasavaraj" },
        { $push: { "pendingtasks": { title: "Task-1", description: "nothing", createdAt: da, completedAt: "none" }} },
        // function (err, raw) {
        //     if (err) return handleError(err);
        //     console.log('The raw response from Mongo was ', raw);
        // }
    )
    console.log(`hef`);
    res.status(200).send(`tqqqq`);
})

app.listen(3001, () => {
    console.log("DOne");
});