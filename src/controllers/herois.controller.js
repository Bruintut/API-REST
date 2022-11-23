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

const createHeroiController = (req, res) => {
  const heroi = req.body;
  const newHeroi = heroisService.createHeroiService(heroi);
  res.send(newHeroi);
};

const updateHeroiController = (req, res) => {
  const idParam = +req.params.id;
  const heroiEdit = req.body;
  const updatedHeroi = heroisService.updateHeroiService(idParam, heroiEdit);
  req.send(updatedHeroi);
};

const deleteHeroiController = (req, res) =>{
    const idParam = req.params.id;
    heroisService.deleteHeroiService(idParam)
    res.send({ message: 'Heroi deletado com sucesso!' })
}

module.exports = {
  findHeroisController,
  findHeroiByIdController,
  createHeroiController,
  updateHeroiController,
  deleteHeroiController,
};
