const db = require('../models/index')
const TodoSchema = db.todo
exports.write = (req, res) => {
    new TodoSchema(req.body).save(()=>{
        console.log('### 진행 4: 노드서버에 진입함'+ JSON.stringify(req.body))
        res.status(200).json({'result':'ok'}) 
    })
}
exports.todolist = (req, res) => {
    console.log(`### todoController access !!!`)
    TodoSchema.find()
    .exec((err, todos) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({'success': true, todos})
    })
}