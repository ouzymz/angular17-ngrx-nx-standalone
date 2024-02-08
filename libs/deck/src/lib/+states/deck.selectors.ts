import { createSelector } from "@ngrx/store";
import { deckAdapter, deckFeature } from "./deck.reducers";

const {selectAll} = deckAdapter.getSelectors();

export const deckSelectors = createSelector(
    deckFeature.selectPokemons,
    selectAll
);
