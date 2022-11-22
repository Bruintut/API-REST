const heroisService = require('../services/herois.service');

const findHeroisController = (req, res) => {
  const allHerois = heroisService.findHeroisService();
  res.send(allHerois);
};

const findHeroiByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenHeroi = heroisService.findHeroiByIdService(idParam);
  res.send(chosenHeroi);
};

module.exports = {
  findHeroisController,
  findHeroiByIdController,
};
