//POKEMON
export interface Pokemon {
  id: number;
  name: string;
  img: string;
  types: string[];
}

export interface PokemonResponse extends Pokemon{
  id: number;
  name: string;
  img: string;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  base_experience: number;
  stats: PokemonStat[];
}


export interface DetailedPokemon extends PokemonResponse{
  description: string;
}


export interface SpeciesResponse {
  flavor_text_entries: { flavor_text: string, language: { name: string } }[];
}

export interface PokemonStat{
  stat: { name: string }, base_stat: number
}


//PRIME NG
export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}