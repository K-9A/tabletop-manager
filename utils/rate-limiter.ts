const rateLimiter = (limit, window) => {
    const ips = new Map();
  
    return (req, res, next) => {
      const now = Date.now();
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
      if (!ips.has(ip)) {
        ips.set(ip, { count: 1, lastRequest: now });
        return next();
      }
  
      const { count, lastRequest } = ips.get(ip);
  
      if (count > limit) {
        if (now - lastRequest < window) {
          res.status(429).json({ error: 'Too many requests' });
          return;
        }
  
        ips.set(ip, { count: 1, lastRequest: now });
        return next();
      }
  
      ips.set(ip, { count: count + 1, lastRequest: now });
      return next();
    };
  };
  
  export default rateLimiter;
  