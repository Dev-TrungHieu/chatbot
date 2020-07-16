const express = require("express");
const { homePage } = require('../controllers/handleController');
const { getWebHook, postWebHook } = require('../controllers/chatBotController');
let router = express.Router();

let initWebRouters = (app) => {
     router.get('/', homePage);
     router.get('/webhook', getWebHook);
     router.post('/webhook', postWebHook);
     
     return app.use('/', router);
};

module.exports = initWebRouters;