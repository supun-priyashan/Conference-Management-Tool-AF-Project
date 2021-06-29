const express = require('express');
const router = express.Router();

const downloadService = require('../services/downloads.service');

module.exports = function(){
    router.get('/', downloadService.getDownloads);

    return router;
}
