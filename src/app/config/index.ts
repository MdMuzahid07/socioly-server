import dotenv from "dotenv";
dotenv.config();


const myConfig = {
    database_user: process.env.DB_URI,
    port: process.env.PORT,
};



export default myConfig;