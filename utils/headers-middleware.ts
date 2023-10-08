const headersMiddleware = (handler) => (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');

  
    return handler(req, res);
  };
  
  export default headersMiddleware;