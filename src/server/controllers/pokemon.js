module.exports = (db) => {

  let apiget = (request, response) => {
    const stuff = {
      banana: 'oranges',
      kiwi: 'apple'
    };

    response.send(stuff);
  };

  let get = (request, response) => {

      // use pokemon model method `get` to retrieve pokemon data
      console.log( db )

      db.pokemon.get(request.params.id, (error, pokemon) => {
        // queryResult contains pokemon data returned from the pokemon model
        if (error) {

          console.error('error getting pokemon', error);
          response.status(500);
          response.send('server error');

        } else {

          if( pokemon === null ){

            // render pokemon view in the pokemon folder
            response.status(404);
            response.send('not found');

          }else{

            // render pokemon view in the pokemon folder
            response.render('pokemon/show', { pokemon: pokemon });

          }
        }
      });
  };

  return {

    get : get,
    apiget : apiget
  }

};
