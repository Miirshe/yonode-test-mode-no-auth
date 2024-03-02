import express from "express";
import { create_user, get_users } from "../controllers/user.controller.js";

const user_route = express.Router();
user_route.get('/',get_users)
user_route.post('/',create_user)
export default user_route;