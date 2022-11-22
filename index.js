const express = require('express');
const port = 3000;
const app = express();

app.get('/', function (req, res) {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Server in port http://localhost:${port}`);
});
