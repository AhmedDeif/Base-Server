import { createLogger, format, transports } from 'winston';

const options = {
    info: {
        level: 'info',
        filename: './logs/app.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    error: {
        level: 'error',
        filename: './logs/error.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

const prettyJson = format.printf((info) => {
    if (info.message.constructor === Object) {
        info.message = JSON.stringify(info.message, null, null);
    }
    return info.message;
});

const { combine, json } = format;

const logstashFormat = combine(json(), prettyJson);

const logger = createLogger({
    level: 'info',
    format: logstashFormat,
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new transports.File(options.error),
        new transports.File(options.info),
        new transports.Console(options.console),
    ],
    exitOnError: false,
});

logger.stream = {
    write(message) {
        logger.info(message.substring(0, message.lastIndexOf('\n')));
    },
};

export default logger;
