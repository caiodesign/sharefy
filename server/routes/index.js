import combineRouters from 'koa-combine-routers';
import auth from './auth';

const router = combineRouters([
  auth,
]);

export default router;
