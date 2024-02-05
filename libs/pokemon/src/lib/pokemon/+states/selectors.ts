import { createSelector } from "@ngrx/store";
import { pokemonAdapter, pokemonFeature } from "./reducers";


const { selectAll, selectEntities } = pokemonAdapter.getSelectors();


export const selectPokemons = createSelector(
    pokemonFeature.selectPokemons,
    selectAll
  );