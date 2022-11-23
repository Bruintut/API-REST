const heroisService = require('../services/herois.service');

const findHeroisController = (req, res) => {
  const allHerois = heroisService.findHeroisService();
  res.send(allHerois);
};

const findHeroiByIdController = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(400).send({ message: 'ID não informado!' });
  }
  const chosenHeroi = heroisService.findHeroiByIdService(idParam);
  if (!chosenHeroi) {
    return res.status(400).send({ message: 'Heroi não encontrado!' });
  }
  res.send(chosenHeroi);
};

const createHeroiController = (req, res) => {
  const heroi = req.body;
  if (
    !heroi ||
    !heroi.nome ||
    !heroi.descricao ||
    !heroi.foto ||
    !heroi.idade
  ) {
    return res.status(400).send({
      message:
        'Não foram preenchidos todos os campos para adicionar um novo heroi',
    });
  }
  const newHeroi = heroisService.createHeroiService(heroi);
  res.send(newHeroi);
};

const updateHeroiController = (req, res) => {
  const idParam = +req.params.id;
  const heroiEdit = req.body;
  if (!idParam) {
    return res.status(404).send({ message: 'Heroi não encontrado!' });
  }

  if (
    !heroiEdit ||
    !heroiEdit.nome ||
    !heroiEdit.descricao ||
    !heroiEdit.foto ||
    !heroiEdit.idade
  ) {
    return res
      .status(400)
      .send({
        message:
          'Não foram preenchidos todos os dados para alteração do Heroi!',
      });
  }
  const updatedHeroi = heroisService.updateHeroiService(idParam, heroiEdit);
  req.send(updatedHeroi);
};

const deleteHeroiController = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: "Heroi não encontrado!" })
  }
  heroisService.deleteHeroiService(idParam);
  res.send({ message: 'Heroi deletado com sucesso!' });
};

module.exports = {
  findHeroisController,
  findHeroiByIdController,
  createHeroiController,
  updateHeroiController,
  deleteHeroiController,
};
