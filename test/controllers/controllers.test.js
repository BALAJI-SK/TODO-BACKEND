
const controller = require('../../src/controllers/controllers');
const service = require('../../src/services/service');
describe('Veryfing controllers: ',()=>{
    describe('verify getAllTask:',()=>{
        it('should return json object when get all tasks called',async ()=>{
            jest.spyOn(service, 'getAllTasksService').mockResolvedValue(
                {
                    'id': 1,
                    'task': 'test',
                    'isComplete': false,
                });
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.getAllTasks({},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                'id': 1,
                'task': 'test',
                'isComplete': false,
            });

        });
        it('should return json object when empty array returned by getAllTask',async ()=>{
            jest.spyOn(service, 'getAllTasksService').mockResolvedValue([]);
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.getAllTasks({},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith( {"message": "No tasks found"});
        });
    });
    describe('verify getTaskById:',()=>{
        it('should return json object when name',async ()=>{
            jest.spyOn(service, 'getTaskByIdService').mockResolvedValue(
                {
                    'id': 1,
                    'task': 'test',
                    'isComplete': false,
                });
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.getTaskById({params:{id:1}},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                'id': 1,
                'task': 'test',
                'isComplete': false,
            });


        });
        it('should return json object when name',async ()=>{
            jest.spyOn(service, 'getTaskByIdService').mockResolvedValue();
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.getTaskById({params:{id:1}},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({"message": "No task with this id"});

        });
    });
    describe('verify createTask:',()=>{
        it('should return json object when name',async ()=>{
            jest.spyOn(service, 'createTaskService').mockResolvedValue(
                {
                    'id': 1,
                    'task': 'test',
                    'isComplete': false,
                });
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.createTask({body:{name:'test',description:'test'}},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                'id': 1,
                'task': 'test',
                'isComplete': false,
            });
        });
        it('should return json object when name',async ()=>{
            jest.spyOn(service, 'createTaskService').mockResolvedValue();
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.createTask({body:{task: 'test'}},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({'message':'Task not created'});

        });
    });
    describe('verify taskComplete:',()=>{
        it('should return json object when name',async ()=>{
            jest.spyOn(service, 'taskCompleteService').mockResolvedValue(
                {
                    'id': 1,
                    'task': 'test',
                    'isComplete': true,
                });
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.taskComplete({params:{id:1}},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({
                'id': 1,
                'task': 'test',
                'isComplete': true,
            });
        });
    });
    describe('verify deleteTask:',()=>{
        it('should return json object when task name given',async ()=>{
            jest.spyOn(service, 'deleteTaskService').mockResolvedValue(
               1);
            const mockRes = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis()
            };
            await controller.deleteTask({params:{id:1}},mockRes);
            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith("Task deleted");
        });
    });
});