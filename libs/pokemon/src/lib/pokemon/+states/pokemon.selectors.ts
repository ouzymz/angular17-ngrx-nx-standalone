import { createSelector } from "@ngrx/store";
import { pokemonAdapter, pokemonFeature } from "./pokemon.reducers";


//ROUTER SELECTORS
export const selectCurrentProductId = selectRouterParam("productId");

import { selectRouterParam } from '@org/environment';


//POKEMON SELECTORS
const { selectAll,  } = pokemonAdapter.getSelectors();

//return all pokemons as an array
export const selectPokemons = createSelector(
  pokemonFeature.selectPokemons,
  selectAll
  );



  
  //IF I FETCHED THE POKEMONS AS DETAILED POKEMONS I WOULD USE THIS SELECTOR
  
// const { selectEntities  } = pokemonAdapter.getSelectors();

//   //return all pokemons as an dictionary
//   export const selectPokemonsDictionary = createSelector(
//     pokemonFeature.selectPokemons,
//     selectEntities
//     )
    

// //return combined selectors
// export const selectSinglePokemonById = createSelector(
//   selectPokemonsDictionary,
//   selectCurrentProductId,
//   (pokemons, productId) => {
//     if (productId == null || !pokemons) return undefined;
//     return pokemons[productId]
//   }
// )