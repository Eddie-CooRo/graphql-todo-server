const { gql } = require('apollo-server-express');
const Todo = require('./Todo');

const User = `
  type User {
    id: Int!
    username: String
    password: String
    todos: [Todo]
  }
`;

module.exports = User;
