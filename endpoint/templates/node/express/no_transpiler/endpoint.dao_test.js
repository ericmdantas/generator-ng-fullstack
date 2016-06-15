"use strict";

const mongoose = require('mongoose');
const <%= name %>DAO = require(process.cwd() + '/server/api/<%= feature %>dao/<%= name %>-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

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
