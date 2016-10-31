import winston = require('winston');
import { LoggerInstance } from 'winston';

export class LoggerFactory {
    private static logger: LoggerInstance;

    private constructor() {}

    // This gives the appearance of creating new loggers via a factory pattern, however,
    // right now, there's no compelling reason to have multiple logger instances throughout
    // the application. As a result, it's really implementing a Singleton pattern. This may
    // change later, due to logging requirements/functionality that i'm currently unaware of.
    static getLogger(): LoggerInstance {
        if (!LoggerFactory.logger) {
            const logLevel = process.env['LOG_LEVEL'];

            LoggerFactory.logger = new winston.Logger({
                transports: [
                    new (winston.transports.Console)({ level: logLevel, raw: true })
                ]
            });
        }

        return LoggerFactory.logger;
    }
}

export { LoggerInstance as Logger };