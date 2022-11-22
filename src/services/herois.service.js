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

module.exports = {
  findHeroisService,
  findHeroiByIdService,
};
