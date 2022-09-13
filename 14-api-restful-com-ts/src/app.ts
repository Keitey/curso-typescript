//chamar o .env
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

//JSON middleware - para trafegar informações
app.use(express.json());

//import DB
import db from "../config/db";

//importar Routes
import router from "./router";

//import logger 
import Logger from "../config/logger";

//middleware
import morganMiddleware from "./middleware/morganMiddleare";

app.use(morganMiddleware);
app.use("/api/", router)

//trabalhar com as portas, com uma função assíncrona pq essa conexão com a porta pode demorar
const port = config.get<number>('port');
app.listen(3000, async () => {
    //só vai iniciar a aplicação se conectar no db
    await db();

    Logger.info(`Aplicação rodando na porta: ${port}`);
})
