const path = require('path');
const _ = require('lodash');
const moment = require('moment');

let user = require(path.resolve('src/db-stub/user'));
let todos = require(path.resolve('src/db-stub/todos'));

module.exports = {
    getuserdetails: getuserdetails,
    getspecifictodo: getspecifictodo,
    getactiveusertodo: getactiveusertodo,
    getupcommingtodo: getupcommingtodo
};

function getuserdetails(userid){
    let userdetails = {};
    let userindex = _.findIndex(user, function(o) { return o.id == userid; });
    let todolist = _.filter(todos, { 'userid': userid, 'done': true });
    userdetails.user = user[userindex];
    userdetails.todos = todolist;
   return userdetails;
}

function getspecifictodo(todoid){
    let todolist = _.find(todos, { 'id': todoid });
    return todolist;
}

function getactiveusertodo(){
    let userdetails = [];
    let activeusers = _.filter(user, { 'isActive': true });
    let activeuserid = _.map(activeusers, 'id');
    _.forEach(activeuserid, function(value) {
        let userindex = _.findIndex(activeusers, function(o) { return o.id == value; });
        let todolist = [];
        todolist = _.filter(todos, { 'userid': value });
        userdetails.push({user: activeusers[userindex], todo: todolist});
    });
    return userdetails;
}

function getupcommingtodo(userid) {
    let todolist = [];
    let today = moment().format('DD-MMM-YYYY');
    let tomorrow = moment().add(1, 'days').format('DD-MMM-YYYY');
    todolist.push(_.filter(todos, { 'userid': userid, 'targetDate': today }));
    todolist.push(_.filter(todos, { 'userid': userid, 'targetDate': tomorrow }));
    var result = _.filter(todolist, function(sub) {
        return sub.length;
    });
    return result;
}