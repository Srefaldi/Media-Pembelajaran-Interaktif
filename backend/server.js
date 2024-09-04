import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import cookiesParser from "cookie-parser"


const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookiesParser());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "mediapembelajaran"
})

app.post('/register', (req, res) =>{
    const sql = "INSET INTO login (`name`,`email`,`password`) VALUES (?)";
    bcrypt.hash(req.body.passowrd.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hassing"});
        const values = [
            req.body.name,
            req.body.email,
            req.body.password,
            hash
        ]
        db.query(sql, [values], (err, result)=>{
            if(err) return res.json({Error : "Insert Gagal di server"});
            return res.json({Status: "Succes"})
        })
    })

})  

app.listen(8081, () => {
    console.log("Berhasil ...")
})