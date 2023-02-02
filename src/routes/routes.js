// IMPORT express   

// import rotuer from express   
const router = require('express').Router();


const {getAllTasks,getTaskById,createTask,deleteTask,deleteTaskIsComplete,taskComplete} = require('../controllers/controllers.js');
router.get('/tasks', getAllTasks);
router.get('/tasks/id/:id', getTaskById);
router.put('/tasks/id/:id', taskComplete);
router.post('/tasks', createTask);
router.delete('/tasks/id/:id', deleteTask);
router.delete('/tasks/isComplete/:isComplete', deleteTaskIsComplete);
module.exports = router;
