const route = require('express').Router();
const tutorial_route = require('./tutorial-routes.js');

const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'REST - Swagger',
            version: '1.0.0',
            description: 'REST API with Swagger doc',
            contact: {
                name: 'Hoang Huu Manh',
                email: 'hoanghuuanh19991@gmail.com',
            },
        },
        tags: [
            {
                name: 'My Farm',
                description: 'All apis with my farm',
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
