import { config } from "../../config";
import {
  PokemonListItem,
  PokemonListItemExtended,
} from "../../store/pokemon/types";

const ICON_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/{id}.png";

export const getPopulatedPokemonListItems = (
  data?: PokemonListItem[]
): PokemonListItemExtended[] =>
  (data || []).map((pokemon) => {
    const pokemonId = pokemon.url
      .replace(config.apiUrls.pokemon, "")
      .split("/")[0];
    return {
      ...pokemon,
      id: parseInt(pokemonId),
      icon: ICON_URL.replace("{id}", pokemonId),
    };
  });
