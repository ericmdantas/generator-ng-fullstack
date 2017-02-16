import <%= name %>DAO from '../dao/<%= name %>-dao';

export default class <%= name %>Controller {
  async getAll() {
    try {
      let <%= nameLowerCase %>s = await <%= name %>DAO.getAll();
      this.body = <%= nameLowerCase %>s;
      this.status = 200;
    } catch(e) {
      this.status = 400;
    }
  }

  async createNew() {
    let _<%= nameLowerCase %> = this.body;

    try {
      this.body = await <%= name %>DAO.createNew(_<%= nameLowerCase %>);
      this.status = 201;
    } catch(e) {
      this.status = 400;
    }
  }

  async removeById() {
    let _id = this.params.id;

    try {
      await <%= name %>DAO.removeById(_id);
      this.status = 200;
    } catch(e) {
      this.status = 400;
    }
  }
}
