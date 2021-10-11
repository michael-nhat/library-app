const route = require('express').Router();
const tutorial_route = require('./tutorial-routes.js');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        // swagger: '2.0',
        // this permit definitions

        // openapi: '3.5.51',
        // components: {},
        // this is like 3.0 , stupid!


        // openapi: '3.0.1',
        // components: {},
        // this not permit definition

        // hoac khong chi dinh no la cai gi ca

        info: {
            title: 'REST - Swagger',
            version: '1.0.0',
            description: 'REST API with Swagger doc',
            contact: {
                name: 'Hoang Van Nhat',
                email: 'nhathoang.haiphong@gmail.com',
            },
        },
        tags: [
            {
                name: 'My Library',
                description: 'All apis with my library',
            },
        ],
        schemes: ['http'],
        host: 'localhost:3000',
    },
    apis: ['app/routes/*.js', 'app/models/*.js'],
};

const swaggerDocs = swaggerJSDoc(options);

route.use('/', swaggerUI.serve);
route.get('/', swaggerUI.setup(swaggerDocs));

module.exports = route;
