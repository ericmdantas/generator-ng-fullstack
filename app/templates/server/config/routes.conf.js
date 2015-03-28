"use strict";

import morgan from 'morgan';
import bodyParser from 'body-parser';
import contentLength from 'express-content-length-validator';

export default class RouteConfig
{
    static init(application, exp, dir)
    {
        var _files = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';

        application.use(exp.static(dir + _files));
        application.use(bodyParser());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
    }
}
