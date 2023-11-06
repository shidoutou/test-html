module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 这将允许所有域名访问
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
    // 允许预检请求
    if ('OPTIONS' == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  };