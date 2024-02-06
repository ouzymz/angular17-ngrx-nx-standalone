import { createActionGroup, props } from "@ngrx/store";
import { DetailedPokemon, Pokemon } from "../model/models";
import { PaginatorState } from "primeng/paginator";
  
export const pokemonApiActions = createActionGroup({
source: "Pokemon API",
events: {
    pokemonsFecthSuccess: props<{ pokemons: Pokemon[] }>(),
    pokemonsFetchedError: props<{ errorMessage: string }>(),

    singlePokemonFecthSuccess: props<{ pokemon: DetailedPokemon }>(),
    singlePokemonFecthError: props<{ errorMessage: string }>(),
},
});

export const paginatorApiActions = createActionGroup({
    source: "Paginator API",
    events: {
        paginatorChanged: props<{ paginatorState: PaginatorState }>(),
    },
}) 