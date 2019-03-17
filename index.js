const koa = require("koa"),
    Router = require("koa-router"),
    logger = require("koa-logger");

const app = new koa(),
    router = new Router();

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

//Publics Routes
require('./src/routes/public/heyThere')({router});

app
    .use(logger())
    .use(router.allowedMethods())
    .use(router.routes())
    .use(require('koa-body')());

const server = app.listen(3000);
console.log("Rest API is Running in http://localhost:3000");

module.exports = server;