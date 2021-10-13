import winston, { Logger } from 'winston';
import type { Config } from '../config';

export default ({ config }: { config: Config }): Logger => {
  const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white'
  };

  winston.addColors(colors);

  const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD | HH:mm:ss.ms' }),
    winston.format.printf((info) => `${info.timestamp as string} | ${info.level} ${info.message}`)
  );

  const transports = [
    new winston.transports.Console({
      level: config.logging.level,
      format: consoleFormat
    })
  ];

  return winston.createLogger({ transports });
};
