import type { Handler } from 'express';
import morgan, { StreamOptions } from 'morgan';
import type { Logger } from 'winston';

export default ({ logger }: { logger: Logger }): Handler => {
  const format = 'dev';

  const stream: StreamOptions = {
    write: (msg) => logger.http(msg.substring(0, msg.lastIndexOf('\n')))
  };

  return morgan(format, { stream });
};
