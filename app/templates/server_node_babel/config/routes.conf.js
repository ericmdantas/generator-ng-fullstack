import morgan from 'morgan';
import bodyParser from 'body-parser';
import contentLength from 'express-content-length-validator';
import helmet from 'helmet';
import express from 'express';

export default class RouteConfig {
    static init(application) {
        let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
        let _root = process.cwd();

        application.use(express.static(_root));
        application.use(express.static(_root + _clientFiles));
        application.use(bodyParser.json());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
