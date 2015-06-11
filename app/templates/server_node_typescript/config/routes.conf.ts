/// <reference path="../typings/tsd.d.ts" />

"use strict";

import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as contentLength from 'express-content-length-validator';
import * as helmet from 'helmet';

export class RoutesConfig
{
    static init(application:Object, exp:Object):void
    {
        var _files = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/__tmp/';
        var _root = process.cwd();

        application.use(exp.static(_root + _files));
        application.use(bodyParser());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
