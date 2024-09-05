import { Sequelize } from "sequelize";

const db = new Sequelize('media_pembelajaran', 'root', '',{
    host : "localhost",
    dialect : "mysql"
})

export default db;