const db= require('../../database/models/index');
const todo= require('../../database/models/todo');
const Tasks = todo(db.sequelize, db.Sequelize.DataTypes);
module.exports = Tasks;