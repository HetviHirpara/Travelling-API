const express = require('express');
const appRoutes = express.Router();
const controller = require ('../controllers/controller');


appRoutes.get('/',controller.defaul);
appRoutes.get('/data',controller.data);
appRoutes.get('/country',controller.Country);
appRoutes.get('/state',controller.State);


module.exports = appRoutes;
