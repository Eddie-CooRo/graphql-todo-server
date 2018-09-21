const { gql } = require('apollo-server-core');
const User = require('./User');
const Todo = require('./Todo');

const RootQuery = `
  type Query {
    todo(id: Int!): Todo
  }
`;

module.exports = [RootQuery, User, Todo];
