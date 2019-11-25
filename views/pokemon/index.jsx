var React = require("react");

class Home extends React.Component {
  render() {
    console.log(this.props.allPokemon);

    const pokemon = this.props.allPokemon.map((pokemon, i)=>{
      return <p>{pokemon.name}</p>;
    });

    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          {pokemon}
        </body>
      </html>
    );
  }
}

module.exports = Home;
