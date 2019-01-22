import Router from 'koa-router'
import user from './user.json'

const auth = new Router({ prefix: '/sharefy/v1' })

auth.get('/auth/user', ctx => ctx.body = user)

export default auth
