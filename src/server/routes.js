const pokemon = require('./controllers/pokemon');

module.exports = (app) => {
  app.get('/api/pokemon/:id', pokemon.get);
};
