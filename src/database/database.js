const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/herois-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongo DB Conectado');
    })
    .catch((err) => {
      return console.log(`Erro na conexão com o banco ${err}`);
    });
}


module.exports = connectToDatabase;
