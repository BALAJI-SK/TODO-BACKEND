const Tasks = require('../utilities/todoUtilities');

const getAllTasksService = async() => {
  
        const all_tasks = await Tasks.findAll();
        return all_tasks;
    
   
};
const getTaskByIdService = async(id) => {
        const task = await Tasks.findAll({
            where: {
                id: id
            }
        });
       return task;
};
const createTaskService = async(body) => {
        const task = await Tasks.create({
            task: body.task,
            isComplete: false 
        });
        if(!task) throw new HTTPError(404,"Task not created");
        return task;
};
const taskCompleteService = async(id) => {
        const task = await Tasks.update({
            isComplete: true
        }, {
            where: {
                id: id
            }
        });
        if(task[0]===0) throw new HTTPError(404,"Task not updated");
        return task;
    
};
const deleteTaskService = async(id) => {  
        const task = await Tasks.destroy({
            where: {
                id: id
            }
        });
        if(0===task){
            throw new HTTPError(404,"No task with this id");
        }
        return task;
};
const deleteTaskIsCompleteService = async(isComplete) => {

        const task = await Tasks.destroy({
            where: {
                isComplete: isComplete
            }
        });
        if(task === 0){
            throw new HTTPError( "delete failed");
        }
        return "delete success";
};


module.exports = {getAllTasksService, getTaskByIdService, createTaskService, taskCompleteService, deleteTaskService, deleteTaskIsCompleteService};