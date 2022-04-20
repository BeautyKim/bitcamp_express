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

// const {signup, userlist} = require('../controllers/user.controller');
// module.exports = x => {
//     x
//         .app
//         .post(`${x.url}/signup`, signup)
//     // x.app.post(`${x.url}/login`, login)
//     x
//         .app
//         .get(`${x.url}/list`, userlist)
// }
export default app