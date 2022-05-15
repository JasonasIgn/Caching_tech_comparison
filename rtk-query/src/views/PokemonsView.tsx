import React from "react";
import { Heading } from '@chakra-ui/react'
import { PokemonTable } from "../components/PokemonTable/PokemonTable";

export const PokemonTableView = () => {
  return (
    <div>
      <Heading marginBottom={10}>Pokemons</Heading>
      <PokemonTable />
    </div>
  );
};
