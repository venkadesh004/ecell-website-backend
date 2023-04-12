const express = require('express');
const Router = express.Router();

const {postData, getData} = require('../controllers/messageControllers');

Router.route('/postData').post(postData);
Router.route('/getData').get(getData);

module.exports = Router;