const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        user: String,
        email: String,
        password: String,
        completedtasks: [],
        pendingtasks: []
    }
)

const User = new mongoose.model('User', userSchema);

module.exports = User;