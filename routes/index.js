const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.emilyRoute);
routes.get('/morgan', lesson1Controller.morganRoute);
routes.get('/ty', lesson1Controller.tyRoute);

module.exports = routes;