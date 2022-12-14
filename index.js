const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
const router = require('./src/routes/herois.routes');

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);

app.use(express.json());

app.use('/herois', router);

app.listen(port, () => {
  console.log(`Server in port http://localhost:${port}`);
});
