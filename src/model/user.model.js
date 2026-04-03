const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "employee"]
    },
    isActive: {
        type: Boolean,
        defalut: true
    }
}, { timestamps: true })

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;