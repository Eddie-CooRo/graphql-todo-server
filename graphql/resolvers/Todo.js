const TodoModel = require('../../db/Todo');
const UserModel = require('../../db/User');

module.exports = {
  Todo: {
    owner: obj => UserModel.findById(obj.owner)
  }
};
