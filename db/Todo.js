const todos = [
  {
    id: 3213,
    title: 'Get milk',
    body: "Don't forget",
    owner: 32
  },
  {
    id: 3214,
    title: 'Get Kooft',
    owner: 32
  }
];

module.exports = {
  getByOwner: ownerId =>
    Promise.resolve(todos.filter(t => t.owner === ownerId)),
  findById: todoId => Promise.resolve(todos.find(t => t.id === todoId))
};
