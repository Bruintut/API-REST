const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);

app.use(express.json());

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

app.get('/herois/find-herois', function (req, res) {
  res.send(herois);
});

app.get('/herois/find-heroi/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenHeroi = herois.find((heroi) => heroi.id == idParam);
  res.send(chosenHeroi);
});

app.listen(port, () => {
  console.log(`Server in port http://localhost:${port}`);
});
