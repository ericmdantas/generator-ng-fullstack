"use strict";

var mongoose = require('mongoose');
var <%= name %>DAO = require(process.cwd() + '/server/api/<%= feature %>dao/<%= name %>.dao');
var expect = require('chai').expect;
var setupMongoose = require('../helpers/db').setupMongoose;

describe('<%= name %>DAO', function()
{
  before(function()
  {
    setupMongoose(mongoose);
  });

  afterEach(function()
  {
    <%= name %>DAO.remove();
  })

  describe('getAll', function()
  {

  })

  describe('createNew', function()
  {

  })

  describe('removeById', function()
  {

  })
})
