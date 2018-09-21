const todoResolvers = require('./Todo');
const userResolvers = require('./User');
const TodoModel = require('../../db/Todo');

const rootResolvers = {
  Query: {
    todo: (_, args) => TodoModel.findById(args.id)
  }
};

module.exports = [rootResolvers, todoResolvers, userResolvers];
