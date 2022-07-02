import express from "express";
import cors  from "cors";
import router from "./routes.js";

const server = express();
const port = 3000;

server.use(cors())
server.use(express.json())
server.use(router);


server.listen(port, () =>{
    console.log(`Server is runing in port ${port}`);
});
