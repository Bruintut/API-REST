const express = require('express');
const router = express.Router();

const heroisController = require('../controllers/herois.controller');

router.get('/find-herois', heroisController.findHeroisController);
router.get('/find-heroi/:id', heroisController.findHeroiByIdController);

module.exports = router;
