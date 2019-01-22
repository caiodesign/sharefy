import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes';
import cors from '@koa/cors';

const debug = require('debug')('mock:server');

const app = new Koa();
const PORT = 3000;

const delayRequest = ms => new Promise(resolve => setTimeout(resolve, ms));

app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await delayRequest(500);
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { message: err.message || 'Internal Server Error' };
    ctx.app.emit('error', err);
  }
});

app.use(cors());
app.use(router());

app.on('error', (err) => {
  debug(err);
});

app.listen(PORT, () => debug(`mock server running on ${PORT}`));
