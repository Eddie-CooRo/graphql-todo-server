const TodoModel = require('../../db/Todo');
const UserModel = require('../../db/User');

module.exports = {
  User: {
    todos: obj => TodoModel.getByOwner(obj.id)
  }
};
