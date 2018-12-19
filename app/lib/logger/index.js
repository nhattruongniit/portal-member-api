const logger = function() {};

logger.prototype.trace = log => console.log(log);

logger.prototype.debug = log => console.log(log);

logger.prototype.info = log => console.log(log);

logger.prototype.warn = log => console.log(log);

logger.prototype.error = log => console.log(log);

logger.prototype.fatal = log => console.log(log);

module.exports = new logger();