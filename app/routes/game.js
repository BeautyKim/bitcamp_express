import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors());

const { write } = require('../controllers/board.controller');
module.exports = x => x.app.post(`${x.url}/write`, write) ;

export default app