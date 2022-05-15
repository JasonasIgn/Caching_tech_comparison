import React from "react";
import "./App.css";
import { Container } from '@chakra-ui/react'
import { PokemonTableView } from "./views/PokemonsView";

function App() {
  return (
    <Container className="App" maxW='container.lg' padding='40px 0px'>
      <PokemonTableView />
    </Container>
  );
}

export default App;
