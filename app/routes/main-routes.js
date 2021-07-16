const tutorial_routers = require('./tutorial-routes.js');
const swagger_routers = require('./swagger-routes.js');
const customer_routers = require('./customer-routes.js');

/**
  * @swagger
  * /cat/:
  *  get:
  *   summary: get all dog
  *   tags:
  *   - Cat
  *   description: all cats
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Stock'
  *   responses:
  *    200:
  *     description: get all cats succesfully
  *    500:
  *     description: fail to get all cats
  */

function routerImport(app){
    app.use('/customer', customer_routers);
    app.use('/tutorial', tutorial_routers);
    app.use('/api-docs', swagger_routers);
    app.get('/', (req, res) => {
        res.json({message: 'Main page mongooes test app'});
    });
}

module.exports =  routerImport;
