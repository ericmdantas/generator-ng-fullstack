const mongoose = require('mongoose');
const expect = require('chai').expect;
<% if (tests) { %>
const <%= name %>DAO = require(process.cwd() + '/server/api/<%= feature %>dao/<%= name %>-dao');
const setupMongoose = require('../../_helpers/db').setupMongoose;
<% } else { %>
  const <%= name %>DAO = require('./<%= name %>-dao');
  const setupMongoose = require('../../../config/db.conf.test').setupMongoose;
<% } %>


describe('<%= name %>DAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    <%= name %>DAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
