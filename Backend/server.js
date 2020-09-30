const koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors')
const ethers = require('ethers')
const PaymentProcessor = require('../build/contracts/PaymentProcessor.json')
const { payment } = require('./db.js')

const app = new koa();
const router = new Router();

app.router( function ctx() {
    ctx.body = 'Hello World'
})

app.use(cors)
   .use(router.routes())
   .use(router.allowedMethods())

   app.listen(4000, () => {
       console.log("server has started")
   })