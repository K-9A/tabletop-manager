const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Log only info and above. Change to 'debug' or 'verbose' for more detailed logs.
  format: winston.format.json(), // Log in JSON format. Can be changed to winston.format.simple() for plain text logs.
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(), // Use simple format for console logs.
    }),
    // Add other transports, like file logging, here if needed.
  ],
});

// In development, log to the `console` with the format: `${info.level}: ${info.message} JSON.stringify({ ...rest })`
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
