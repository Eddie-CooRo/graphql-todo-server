const User = require('./User');
const { gql } = require('apollo-server-express');

const Todo = `
  type Todo {
    id: Int!
    title: String!
    body: String
    owner: User
  }
`;

module.exports = Todo;
