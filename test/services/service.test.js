
const Tasks = require('../../src/utilities/todoUtilities');
const service = require('../../src/services/service');
describe('Veryfing service: ',()=>{
    describe('verify getAllTask:',()=>{
        it('should return json object when name',async ()=>{
           jest.spyOn(Tasks, 'findAll').mockResolvedValue(
                [{
                    'id': 1,
                    'task': 'test',
                    'isComplete': false,
                }]);
            await service.getAllTasksService();
           
            expect().toBe([{
                'id': 1,
                'task': 'test',
                'isComplete': false,
            }]);

        });
        it('should return json object when name',async ()=>{
            jest.spyOn(Tasks, 'findAll').mockResolvedValue([]);
            await service.getAllTasksService();
            expect().toBe([]);
        });
    });
});