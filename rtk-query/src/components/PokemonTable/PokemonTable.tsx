import React from "react";
import { PokemonTableComponent } from "./PokemonTableComponent";
import { useGetPokemonQuery } from "../../store/pokemon/service";

export const PokemonTable = () => {
  const { data, error, isLoading } = useGetPokemonQuery();

  return <PokemonTableComponent data={data?.results} isLoading={isLoading} />;
};
