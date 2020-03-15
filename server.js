// express를 불러온 것
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');


// server.js 파일에서 라우트를 만든 후 상수화 시킴
// require(경로)를 orderRoutes, productsRoute로 상수화 시킴
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');
const mongoDBurl = 'mongodb+srv://seolin202:tjfdls0114**@cluster0-4lqvd.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDBurl, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log("MongDB connected.."))
    .catch(err => console.log(err.message));

app.use(morgan("dev"));
app.use('/products', productsRoute);
app.use('/orders', ordersRoute);




// 포트는 3000번
const port = 3000;
// app중의 .listen 이라는 모듈을 실행, console.log를 통해 서버가 실행되면 "server started.."라는 스트링을 보이게 한다.
app.listen(port, console.log("server started.."));
