var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')
var User = require('../models/user')

const dotenv = require("dotenv");

// get config vars
dotenv.config();

module.exports.sign_in = async function(req, res) {
	const candidate = await User.findOne({ email: req.body.email })
	if (candidate) {
		const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
		if (passwordResult) {
			const token = jwt.sign(
				{
					email: candidate.email,
					userId: candidate.id
				},
				process.env.TOKEN_SECRET,
				{ expiresIn: 60 * 60 }
			);

			res.status(200).json({
				token: `Bearer ${token}`
			});
		} else {
			res.status(401).json({
				massage: 'Password not correct'
			});
			console.log('Password not correct');
		}
	} else {
		res.status(404).json({
			massage: 'User not found'
		});
		console.log('User not found');
	}
}

module.exports.sign_up = async function(req, res) {
    const user = await User.findOne({ email: req.body.email })

    if (user) {
        res.status(400).json({
            message: "Email already exist"
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            name: req.body.name, 
            email: req.body.email,
            password: crypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (e) {
            res.status(401).json({
                message: "Can't save user"
            })
        }
    }
}