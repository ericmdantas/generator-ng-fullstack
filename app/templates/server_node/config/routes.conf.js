"use strict";

const morgan = require('morgan');
const bodyParser = require('body-parser');
const contentLength = require('express-content-length-validator');
const helmet = require('helmet');

module.exports = class RouteConfig {
    static init(application, exp) {
        let _root = process.cwd();
        let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';

        application.use(exp.static(_root));
        application.use(exp.static(_root + _clientFiles));
        application.use(bodyParser.json());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
