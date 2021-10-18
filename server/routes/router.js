const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

//  Home Root Route using [GET method] ---------------- 
route.get('/', services.homeRoutes);

/*  /add-user Route ---------------------------------*/
route.get('/add-user', services.add_user)

/*  update-user Route -------------------------------*/
route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route