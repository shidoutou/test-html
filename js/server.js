const jsonServer = require('json-server');
const cors = require('cors');
const app = jsonServer.create();
const router = jsonServer.router('student.json'); // 你的JSON文件
const middlewares = jsonServer.defaults();

// app.use(cors({
//   origin: function(origin, callback){
//     if (!origin || /192\.168\.\d{1,3}\.\d{1,3}$/.test(origin)) {
//       // 允许请求没有origin（比如Postman或curl）的请求或局域网中的请求
//       callback(null, true);
//     } else {
//       // 拒绝其他域的请求
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));

app.use(cors({
  origin: true,  // 反射请求的Origin头部作为允许的源
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.use(middlewares);
app.use(router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
