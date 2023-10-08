// Logger for API routes
const logger = require('./logger');

export const loggerMiddleware = (handler) => async (req, res) => {
  logger.info(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Continue to the actual API route handler
  return handler(req, res);
};