import express from "express";
import { getUsers, Register } from "../controllers/User.js";  

const router = express.Router();

router.get('/user', getUsers);

router.post('/user', Register);

export default router;
