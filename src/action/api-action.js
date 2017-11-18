const path = require('path');
const model = require(path.resolve('src/model/api-model'));

module.exports = {
    getuserdetails: getuserdetails,
    gettodoitem: gettodoitem,
    getactiveuserandtodo: getactiveuserandtodo,
    upcommingtodo: upcommingtodo
};

function getuserdetails(req, res) {
    res.json(model.getuserdetails(req.params.userId));
}

function gettodoitem(req, res) {
    res.json(model.getspecifictodo(req.params.todoId));
}

function getactiveuserandtodo(req, res) {
    res.json(model.getactiveusertodo());
}

function upcommingtodo(req, res) {
    res.json(model.getupcommingtodo(req.params.userId));
}