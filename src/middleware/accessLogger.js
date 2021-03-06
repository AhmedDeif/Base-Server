import morgan from 'morgan';
import Logger from '../helpers/logger';

function jsonFormat(tokens, req, res) {
    return JSON.stringify({
        'remote-address': tokens['remote-addr'](req, res),
        time: tokens.date(req, res, 'iso'),
        method: tokens.method(req, res),
        url: tokens.url(req, res),
        'http-version': tokens['http-version'](req, res),
        'status-code': tokens.status(req, res),
        'content-length': tokens.res(req, res, 'content-length'),
        referrer: tokens.referrer(req, res),
        'user-agent': tokens['user-agent'](req, res),
    });
}

const loggerMiddleWare = morgan(jsonFormat, { stream: Logger.stream });

export default loggerMiddleWare;
