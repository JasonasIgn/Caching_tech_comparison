// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config";
import { PokemonListItem } from "./types";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.apiUrls.base }),
  endpoints: (builder) => ({
    getPokemon: builder.query<{ results: PokemonListItem[] }, void>({
      query: () => `pokemon`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonQuery } = pokemonApi;
