var video = require('../api/video.js');
const express = require('express');
var app = express();
var router = express.Router();

router.post('/getVideos',video.getVideos);
//router.post('/combineTickers',video.combineTickers);
module.exports = router;
