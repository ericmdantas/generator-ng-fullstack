import <%= name %>Controller from '../controller/<%= name %>-controller';

export default class <%= name %>Routes {
  static init(router) {
    router
      .route('/api/<%= nameLowerCase %>')
      .get(<%= name %>Controller.getAll)
      .post(<%= name %>Controller.createNew);

    router
      .route('/api/<%= nameLowerCase %>/:id')
      .delete(<%= name %>Controller.removeById);
  }
}
