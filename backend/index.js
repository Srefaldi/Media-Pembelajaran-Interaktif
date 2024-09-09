import db from "./config/Database.js";
import express from "express";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
``
dotenv.config();
console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);
console.log('REFRESH_TOKEN_SECRET:', process.env.REFRESH_TOKEN_SECRET);

const app = express();

try {
  await db.authenticate();
  console.log('Database Connected');
  // await db.sync();
} catch (error) {
  console.error(error);
}
app.use(cors ({Credentials:true, origin:'http://localhost:5173'}))
app.use(cookieParser()); 
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server Running on port 5000'));
