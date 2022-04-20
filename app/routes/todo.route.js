const { write, todolist } = require('../controllers/todo.controller');
module.exports = x => {x.app.post(`${x.url}/write`, write)
                        x.app.get(`${x.url}/list`, todolist)}