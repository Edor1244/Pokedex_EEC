import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PokemonForm = (setLoading, setPokemonId, setError) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemon !== "") {
      setError(true);
      setLoading(true);
      const pokemonID = window.isNaN(parseInt(pokemon))
        ? pokemon.toLowerCase()
        : pokemon;
      setPokemonId(pokemonID);
      setPokemon("");
      return;
    }
    setError(true)  
  };
  return (
    <Container>
      <form className="pokemonForm" onSubmit={handleSubmit}>
        <Row>
          <input
            className="pokemonInput"
            type="text"
            name="pokemon"
            value={pokemon}
            placeholder="¿Que pokemon quieres ver?"
            onChange={(e) => setPokemon(e.target.value)}
            autoComplete="off"
          />
        </Row>
        <Row>
          <input type="submit" className="pokemonBtn" value="" />
        </Row>
      </form>
    </Container>
  );
};

export default PokemonForm;