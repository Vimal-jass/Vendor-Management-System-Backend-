const userModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


async function registerUser(req, res) {
    const { username, phone, email, password, role } = req.body

    if (!username || !phone || !email || !password) {
        return res.status(400).json({
            message: "all field are manadatory to fill"
        })
    }

    const isRegisteredAlready = await userModel.findOne({
        email, phone
    })

    if (isRegisteredAlready) {
        return res.status(400).json({
            message: "user already registered"
        })
    }


    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        phone,
        password: hashPassword,
        role: "employee"
    })


    const refreshToken = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })


    const accessToken = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: "15m"
    })

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000 //7days
    })

    return res.status(201).json({
        message: "registered successfully",
        user,
        accessToken
    })


}

module.exports = { registerUser }