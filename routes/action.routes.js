const {Router} = require('express')
const router = Router();
const {getTasks, createTask, deleteTask} = require('../controllers/tasksBackend.controller')

router.get('/tasksBackend', getTasks);
router.post('/tasksBackend/', createTask);
router.delete('/tasksBackend/:id',deleteTask);

module.exports = router;