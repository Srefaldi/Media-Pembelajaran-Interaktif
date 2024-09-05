import db from "./config/Database.js";
import express from "express";
import router from "./routes/index.js"
import dotenv from "dotenv"
dotenv.config();
const app = express();

async function startApp() {
  try {
    await db.authenticate();
    console.log('Database Connected');
    

  } 
  
  catch (error) {
    console.log(error);
  }
}

app.use(express.json())
app.use(router);
startApp();

app.listen(5000, () => console.log('Server Running on port 5000'));
