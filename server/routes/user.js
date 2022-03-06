import express from "express";

import { createUser, getUsers, deleteUser } from "../controllers/users.js";
import userData from "../models/userData.js";
const getRouter = express.Router();

getRouter.get('/', getUsers)
getRouter.post('/', createUser);
getRouter.delete('/:id', deleteUser);


export default getRouter;