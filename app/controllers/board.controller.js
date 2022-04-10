const db = require('../models/index')
const BoardSchema = db.board
exports.boardForm = (req, res) => {
    new BoardSchema(req.body).save(()=>{
        res.status(200).json({'result':'ok'})
    })
}
exports.boardList = (req, res) => {
    BoardSchema.find()
    .exec((err, boards) => {
        if(err) return res.status(400).send(err)
        res.status(200).json({'success': true, boards})
    })
}