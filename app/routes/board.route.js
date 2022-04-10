const {boardForm, boardList} = require('../controllers/board.controller');
module.exports = x => {x.app.post(`${x.url}/form`, boardForm)
                       x.app.get(`${x.url}/list`, boardList)}