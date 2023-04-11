import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stat from "./Stat";
import ErrorPokemon from "../img/error.gif";
import LoadingPokemon from "../img/loading.gif";

const PokedexScreen = ({pokemon, loading, error}) => {
  if (error) {
    return (
      <Container>
        <div className="pokedex-screen">
          <img
            src={ErrorPokemon}
            alt="Hubo un error buscando tu pokemon"
            className="pokedex-no-screen"
          />
        </div>
      </Container>
    );
  }
  return (
    <Container fluid>
      <div className="pokedexScreen"></div>
      { !pokemon || loading ? 
       <img 
       src={LoadingPokemon}
       alt="Aún no hay ningun pokemon"
       className="pokedex-no-screen"
       />:
        <Row>
          <div className="pokemonInfo">
            <Row>
              <h2 className="pokemonName">{pokemon.name}</h2>
            </Row>
            <Row>
              <img
                className="pokemonImg"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </Row>
            <Row>
              <ul className="pokemonStats">
                {pokemon.stats.map(item => (
                  <Stat key={item.stat.name} item={item} />
                ))}
              </ul>
            </Row>
          </div>
        </Row>
      }
    </Container>
  );
};

export default PokedexScreen;
