import dotenv from 'dotenv'
import mongoose from 'mongoose'
// import UserModel from './user.model'
// import TodoModel from './todo.model'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URL
// db.user = UserModel(mongoose)
// db.todo = TodoModel(mongoose)

export default db