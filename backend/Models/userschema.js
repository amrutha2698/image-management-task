const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validator(value) {
            if (validator.isEmail(value)) {
                throw Error("Invalid email id")
            }
        }
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})

const users = new mongoose.model("users", userSchema)

module.exports = users