"use strict";

const morgan = require('morgan');
const bodyParser = require('body-parser');
const contentLength = require('express-content-length-validator');
const helmet = require('helmet');

module.exports = class RouteConfig {
    static init(application, exp) {
        var _files = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/__tmp/';
        var _root = process.cwd();

        application.use(exp.static(_root + _files));
        application.use(bodyParser());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
