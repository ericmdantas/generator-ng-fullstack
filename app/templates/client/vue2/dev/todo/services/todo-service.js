function TodoService() {  

}

TodoService.prototype.getAll = function() {
  return Promise.resolve([]);
}

TodoService.prototype.add = function(todo) {
  return Promise.resolve(todo);
}

TodoService.prototype.remove = function(id) {
  return Promise.resolve(id);
}
