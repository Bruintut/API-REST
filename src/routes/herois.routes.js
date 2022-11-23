const express = require('express');
const router = express.Router();

const heroisController = require('../controllers/herois.controller');

router.get('/find-herois', heroisController.findHeroisController);
router.get('/find-heroi/:id', heroisController.findHeroiByIdController);
router.post('/create', heroisController.createHeroiController);
router.put('/update/:id', heroisController.updateHeroiController)
router.delete('/delete/:id', heroisController.deleteHeroiController);

module.exports = router;
