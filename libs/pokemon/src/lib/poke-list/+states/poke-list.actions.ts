import {  createActionGroup, emptyProps } from '@ngrx/store';


export const pokeListActions = createActionGroup({
    source: "pokeList API",
    events: {
        pokemonsOpened: emptyProps(),

    },
});