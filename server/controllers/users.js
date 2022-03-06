import userData from "../models/userData.js";
import mongoose from 'mongoose';

export const getUsers = async(req, res) => {
    try {
        const userDatas = await userData.find();

        res.status(200).json(userDatas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createUser = async(req, res) => {
    const user = req.body;

    const newUser = new userData(user)
    console.log(user)


    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async(req, res) => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        email,
        city
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = {
        creator,
        firstName,
        lastName,
        email,
        city,
        _id: id
    };

    await userData.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export const deleteUser = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await userData.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}