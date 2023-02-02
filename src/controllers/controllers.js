

const HTTPError = require('../utilities/utilities');

//import ro from 'express';
const  service = require('../services/service');
const getAllTasks = async(req, response) => {
    try{
     const all_tasks = await service.getAllTasksService();
     if(!Array(all_tasks)) throw new HTTPError(404,"Couldn't fetch tasks");
     if(all_tasks.length === 0) return response.status(200).json({'message':'No tasks found'});
     response.status(200).json(all_tasks);
    }
    catch(error){
        if(error instanceof HTTPError){
            response.status(error.status).json({'message':error.message});
        }
        else{
            response.status(500).json({'message':error.message});
        }
    }
    
};

const getTaskById = async(req, response) => {
    try{
            const task = await service.getTaskByIdService(req.params.id);
            if(task.length===0) throw new HTTPError(404,"No task with this id");
            return response.status(200).json(task);
    }catch(error){
        if(error instanceof HTTPError){
            response.status(error.status).json({'message':error.message});
        }else{
            response.status(500).json({'message':error.message});
        }
    }
};

const createTask = async (req, response) => {
    const body = req.body;
    try{
        const createTask = await service.createTaskService(body);
        if(!createTask) throw new HTTPError(404,"Task not created");
        return response.status(200).json((createTask));
    }catch(err){
        if(err instanceof HTTPError){
            response.status(err.status).json({'message':err.message});
        }
    else{
        response.status(500).json({'message':err.message});
    }
    }
};   
const taskComplete = async(req, response) => {
    let id = req.params.id;
    try{
        const task = await service.taskCompleteService(id);
        if(task===0) throw new HTTPError( 404,"Task not updated");
         response.status(200).json(task);
    }catch(err){
        if(err instanceof HTTPError){
            response.status(err.status).json({'message':err.message});
        }
    else{
        response.status(500).json({'message':err.message});
    }
    }
    
};
const deleteTask = async(req, response) => {
    let idToBeDeleted = req.params.id;
    try{
        const task = await service.deleteTaskService(idToBeDeleted);
        if(task === 0)  throw new HTTPError( 404,"No task with this id");
        return response.status(200).json("Task deleted");
    }catch(err){
       if(err instanceof HTTPError){
            response.status(err.status).json({'message':err.message});
        }
    else{
        response.status(500).json({'message':err.message});

    }
};}
const deleteTaskIsComplete = async(req, response) => {
    const isComplete = req.params.isComplete;
    try{
        const task = await service.deleteTaskIsCompleteService(isComplete);
        if(task === 0) throw new HTTPError( 404,"delete failed");
        return response.json(task);
    }
    catch(err){
        if(err instanceof HTTPError){
            response.status(err.status).json({'message':err.message});
        }
    else{
        response.status(500).json({'message':err.message});
    }
};};

module.exports = {getAllTasks,getTaskById,createTask,taskComplete,deleteTask,deleteTaskIsComplete 
};
