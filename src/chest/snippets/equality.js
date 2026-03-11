
const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]))

isEqual({ name: 'Frank', age: 32 }, { name: 'Frank', age: 32 })