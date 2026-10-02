import winston from 'winston';

export function createTestLogger(testInfo) {
  return winston.createLogger({
    level: 'info',

    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) =>
        `${timestamp} [${level.toUpperCase()}] ` +
        `[${testInfo.project.name}] [${testInfo.title}] ${message}`
      )
    ),

    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: testInfo.outputPath('execution.log'),
      }),
    ],
  });
}