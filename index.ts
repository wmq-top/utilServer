const Koa = require('koa');
const test = require('./src/test.ts');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
  test();
});

app.listen(7001);
