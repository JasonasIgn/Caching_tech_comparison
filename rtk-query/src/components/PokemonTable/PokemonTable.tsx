import React from "react";
import { PokemonTableComponent } from "./PokemonTableComponent";
import { useGetPokemonQuery } from "../../store/pokemon/service";
import { getPopulatedPokemonListItems } from "./utils";

export const PokemonTable = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  return (
    <PokemonTableComponent
      data={getPopulatedPokemonListItems(data?.results)}
      isLoading={isLoading}
    />
  );
};
