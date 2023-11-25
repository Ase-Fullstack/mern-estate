import mongoose from "mongoose";

const userScehema  = new mongoose.Schema ({
    username: {
        type: string,
        required: true,
        unique: true,
        },
    email: {
        type: string,
        required: true,
        unique: true,
        },
    password: {
        type: string,
        required: true,
        },
}, { temestamps: true });

const User = mongoose.model ('User', userScehema);

export default User;