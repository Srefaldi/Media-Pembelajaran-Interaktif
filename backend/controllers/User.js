import Users from "../models/UserModels.js";
import bcrypt from "bcrypt"
const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export { getUsers };

export const Register = async(req, res) =>{
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm tidak cocok "});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try{
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        })
        res.json({msg: "Register Berhasil"})
    } catch (error){
        console.log(error)
    }

}
