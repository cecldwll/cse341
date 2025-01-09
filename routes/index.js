const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.classRoute);
routes.get('/hello', lesson1Controller.helloRoute);
routes.get('/goodbye', lesson1Controller.goodbyeRoute);

module.exports = routes;