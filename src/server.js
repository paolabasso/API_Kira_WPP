import express from "express";
import cors  from "cors";
import dotenv from 'dotenv';
import router from "./routes.js";

dotenv.config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors())
server.use(express.json())
server.use(router);


server.listen(port, () =>{
    console.log(`Server is runing in port ${port}`);
});
