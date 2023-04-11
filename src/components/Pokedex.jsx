import PokedexScreen from "./Pokedex_Screen";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import Stat from "./Stat";
import PokemonForm from "./PokedexForm";

const Pokedex = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const RandomId = Math.floor(Math.random() * 806 + 1);
  const [pokemonID, setPokemonId] = useState(RandomId);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/${pokemonID}')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, [pokemonID]);

  return (
    <Container fluid>
      <div className="Pokedex">
        <Row>
          <div className="pokedexIzq">
            <Row>
              <div className="pokedexIzqArr">
                <Col>
                  <div
                    className={`light is-sky is-big ${
                      loading && "is-animated"
                    }`}
                  ></div>
                </Col>
                <Col>
                  <div className="light is-red"></div>
                </Col>
                <Col>
                  <div className="light is-yellow"></div>
                </Col>
                <Col>
                  <div className="light is-green"></div>
                </Col>
              </div>
            </Row>
            <Row>
              <div className="pokedexScreenContainer">
                <Col>
                  <PokedexScreen
                    pokemon={pokemon}
                    loading={loading}
                    error={error}
                  />
                </Col>
              </div>
            </Row>
            <Row>
              <div className="pokedexIzqButton">
                <Row>
                  <div className="botonesPokedexIzquierda">
                    <Col>
                      <div className="light is-blue is-medium"></div>
                    </Col>
                    <Col>
                      <div className="light is-green is-large"></div>
                    </Col>
                    <Col>
                      <div className="light is-orange is-large"></div>
                    </Col>
                  </div>
                </Row>
                <Row>
                  <div className="pokemonFormContainer">
                    <PokemonForm
                      setPokemonId={setPokemonId}
                      setLoading={setLoading}
                      setError={setError}
                    />
                  </div>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
        <Row>
          <div className="pokedexDereFrente"></div>
        </Row>
        <Row>
          <div className="pokedexDereAtras"></div>
        </Row>
      </div>
    </Container>
  );
};

export default Pokedex;
