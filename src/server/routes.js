module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);

  app.get('/pokemon/:id', pokemon.get);

  app.get('/api/pokemon/:id', pokemon.apiget);
};
