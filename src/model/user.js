// model/user.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please Enter Your Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
    },
    credits: {
        type: Number,
        default: 0,
    },
})

export const user = mongoose.models.users || mongoose.model("users", userSchema);