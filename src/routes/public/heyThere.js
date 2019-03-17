module.exports = ({
    router
}) => {
    // getting the home route
    router.get('/heythere', (ctx, next) => {
        ctx.body = ctx.body = {
            message: "Welcome to a clean template REST API with koa ;)",
            version: "2.0.0"
        };
    });
};