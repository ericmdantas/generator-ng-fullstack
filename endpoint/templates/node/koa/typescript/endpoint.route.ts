import * as <%= name %>Controller from '../controller/<%= name %>-controller';

export default class <%= name %>Routes {
  static init(router) {
    let <%= name %> new <%= name %>Controller();

    router.get('/api/<%= nameLowerCase %>', <%= name %>.getAll);
    router.post('/api/<%= nameLowerCase %>', <%= name %>.createNew);
    router.del('/api/<%= nameLowerCase %>/:id', <%= name %>.removeById);
  }
}
