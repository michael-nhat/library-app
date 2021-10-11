const swagger_routers = require('./swagger-routes.js');
// const author_routes = require('./author-routes.js');
const customer_routes = require("./customer-routes.js");

function applyRouter(app){

    // app.use('/author', author_routers);
    app.use("/customer",customer_routes);
    app.use('/api-docs', swagger_routers);
    app.get('/', (req, res) => {
        res.json({message: 'Main page mongooes test app'});
    });
}

module.exports =  applyRouter;
