export interface PokemonListItem {
    name: string;
    url: string
}

export interface PokemonListItemExtended extends PokemonListItem {
    id: number;
    icon: string;
}