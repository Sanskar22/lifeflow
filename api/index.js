const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Donor = require('./models/Donor');
const nodemailer = require('nodemailer');
require('dotenv').config();



const salt = bcrypt.genSaltSync(10);
const secret = "ejfsdjfkajsdflkaj";

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));


mongoose.connect(process.env.MONGO_URI);


app.get('/test', (req, res) => {
    res.json('fine');
})

app.post('/sign-up', async (req, res) => {
    const { firstName, lastName, email, dob, gender, address
        , zipcode, password, termsAccepted } = req.body;

    const userDoc = await User.create({
        firstName, lastName, email, dob, gender, address,
        zipcode,
        password: bcrypt.hashSync(password, salt), termsAccepted
    })
    res.json(userDoc);
})

app.post('/sign-in', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email })
    if (!userDoc) {
        return res.status(400).json({ error: "please login with correct credentials" })
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (!passOk) {
        return res.status(400).json({ error: "please login with correct credentials" })
    }

    jwt.sign({ email: userDoc.email, id: userDoc._id, name: userDoc.name }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json(token)
    })
})

app.get('/profile', async (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, secret, async (err, userData) => {
            if (err) {
                return res.status(401).json({ error: 'Invalid token' });
            }
            try {
                const userDoc = await User.findById(userData.id);
                res.json(userDoc);
            } catch (dbError) {
                res.status(500).json({ error: 'Database error' });
            }
        });
    } else {
        res.json(null);
    }

});


app.post('/logout', (req, res) => {
    res.clearCookie('token').json({ success: true });
});

app.put('/edit-profile', async (req, res) => {
    const { token } = req.cookies;
    const { firstName, lastName, email, address, zipcode } = req.body;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        const userId = decoded.id;
        const userDoc = await User.findById(userId);
        if (!userDoc) {
            return res.status(404).json({ message: 'User not found' });
        }
        userDoc.set({
            firstName, lastName, email, address, zipcode
        });

        await userDoc.save();
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error(error);
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        res.status(500).json({ message: 'Server error' });
    }
})

app.post('/donate', async (req, res) => {
    const { name, email, phone, state, city, address,
        bloodGroup, gender, totalDonate, dob, lastDonate } = req.body;

    const donorDoc = await Donor.create({
        name, email, phone, state, city, address,
        bloodGroup, gender, totalDonate, dob, lastDonate
    })
    res.json(donorDoc)
})

app.get('/blood-group-counts', async (req, res) => {
    try {
        const donors = await Donor.find({}, 'bloodGroup');
        const counts = donors.reduce((acc, user) => {
            acc[user.bloodGroup] = (acc[user.bloodGroup] || 0) + 1;
            return acc;
        }, {});
        res.json(counts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/user-by-blood-group', async (req, res) => {
    try {
        const bloodGroup = req.query.bloodGroup;
        if (!bloodGroup) {
            return res.status(400).json({ message: 'Blood group is required' });
        }
        const users = await Donor.find({ bloodGroup: String(bloodGroup) });

        if (users.length === 0) {
            return res.status(404).json({ message: 'No donors found for this blood group' });
        }
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.post('/forget-password', async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email: email }).
        then(user => {
            if (!user) {
                return res.send({ Status: "User does not exist" })
            }
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: "5m" })
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'sanskarverma124@gmail.com',
                    pass: 'bxidgvdbhbdpbyvv'
                }
            });

            var mailOptions = {
                from: 'sanskarverma124@gmail.com',
                to: `${user.email}`,
                subject: 'Reset Password',
                text: `http://localhost:5173/reset-password/${user._id}/${token}`
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        })
})

app.post('/reset-password/:id/:token', async (req, res) => {
    const { id, token } = req.params
    const { password } = req.body;
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            res.send("error reseting password")
        }
        else {
            bcrypt.hash(password, 10)
                .then(hash => {
                    User.findByIdAndUpdate({ _id: id }, { password: hash })
                        .then(u => res.send("SUCCESS"))
                        .catch(err => res.send(err))
                })
        }
    })
})


app.listen(5000)