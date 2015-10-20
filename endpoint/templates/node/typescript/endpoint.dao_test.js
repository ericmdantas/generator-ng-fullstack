var mongoose = require('mongoose');
var <%= name %>DAO = require(process.cwd() + '/server/api/<%= feature %>dao/<%= name %>.dao');
var expect = require('chai').expect;
var setupMongoose = require('../../_helpers/db').setupMongoose;

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
