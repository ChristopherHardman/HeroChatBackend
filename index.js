const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const app = new Koa();
const router = require('./router');
const db = require('./db')

app
  .use(cors())
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      console.error (e);
      ctx.status = 500;
      if (e.message) {
        ctx.body = {
          errors: [e.message]
        };
      }
    }
  })
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

let port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('koa app listening on port', port);
})
