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


// const {boardForm, boardList, write} = require('../controllers/board.controller');
// module.exports = x => {x.app.post(`${x.url}/form`, boardForm)
//                        x.app.get(`${x.url}/list`, boardList)
//                        x.app.post(`${x.url}/write`, write)}
                       
export default app
