const herois = [
  {
    id: 1,
    nome: 'Izuku Midoriya',
    descricao:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    foto: './assets/images/izuku.jpg',
    idade: 16,
  },
];

const findHeroisService = () => {
  return herois;
};

const findHeroiByIdService = (idParam) => {
  return herois.find((heroi) => heroi.id == idParam);
};

const createHeroiService = (newHeroi) => {
  const newId = herois.length + 1;
  newHeroi.id = newId;
  herois.push(newHeroi);
  return newHeroi;
};

const updateHeroiService = (idParam, heroiEdited) => {
  heroiEdited[`id`] = idParam;
  const heroiIndex = herois.findIndex((heroi) => heroi.id == idParam);
  herois[heroiIndex] = heroiEdited;
  return heroiEdited;
};

const deleteHeroiService = (idParam) => {
  const heroiIndex = herois.findIndex((heroi) => heroi.id == idParam);
  return herois.splice(heroiIndex, 1);
};

module.exports = {
  findHeroisService,
  findHeroiByIdService,
  createHeroiService,
  updateHeroiService,
  deleteHeroiService,
};
