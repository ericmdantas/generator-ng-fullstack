class <%= name %>Service {
  constructor() {

  }

  getAll() {
    return Promise.resolve([]);
  }

  add(todo) {
    return Promise.resolve(todo);
  }

  remove(id) {
    return Promise.resolve(id);
  }
}
