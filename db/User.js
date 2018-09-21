const users = [
  {
    id: 32,
    username: 'Eddie',
    password: 'MyNameIsEddie'
  }
];

module.exports = {
  findById: id => Promise.resolve(users.find(u => u.id === id)),
  findByUsername: username =>
    Promise.resolve(users.find(u => u.username === username))
};
