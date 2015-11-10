import morgan from 'morgan';
import bodyParser from 'body-parser';
import contentLength from 'express-content-length-validator';
import helmet from 'helmet';

export default class RouteConfig {
    static init(application, exp) {
        let _files = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
        let _root = process.cwd();

        application.use(exp.static(_root + _files));
        application.use(bodyParser());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({max: 999}));
        application.use(helmet());
    }
}
