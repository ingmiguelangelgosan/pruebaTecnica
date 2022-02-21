const {getConnection} = require('../db');
const {v4} = require('uuid')

const getTasks = (req,res)=> {
    const tasks = getConnection().get('tasksBackend').value();
    res.json(tasks)
};

const createTask = (req,res) => {
    const newTask = {
        id: v4(),
        date:req.body.date,
        title: req.body.title,
        text: req.body.text
    };
    getConnection().get('tasksBackend').push(newTask).write();
    res.send(newTask)
}

const deleteTask = (req,res) => {
    const result = getConnection().get('tasksBackend').remove({id: req.params.id}).write();
    res.json(result);
}

module.exports = {getTasks, createTask,deleteTask}