const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller for listing
const homeController = require('../controllers/home_controller.js');
console.log('router loaded');

//router
router.get('/',homeController.home);
router.post('/create-task', homeController.createTodo);
router.post('/delete-task', homeController.deleteTodo);
router.get('/delete', homeController.deleteSingleTask);

module.exports = router;