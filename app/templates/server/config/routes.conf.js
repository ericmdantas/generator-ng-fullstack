"use strict";

const morgan = require('morgan');
const bodyParser = require('body-parser');
const contentLength = require('express-content-length-validator');

export default class RouteConfig
{
    static init(application, exp, dir)
    {
        application.use(exp.static(dir + '/client/dev/'));
        application.use(bodyParser());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
    }
}
