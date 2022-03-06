import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    city: String
})

const userData = mongoose.model('userData', userSchema);
export default userData;