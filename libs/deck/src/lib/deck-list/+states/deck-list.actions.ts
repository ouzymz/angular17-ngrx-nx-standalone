import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Pokemon } from "@org/environment";

export const deckListOpened = createAction("[Deck List Page] Opened");

export const deckListApiActions = createActionGroup(
    {
        source: "Deck List API",
        events: {
            deckListOpened: emptyProps(),
            addToDeckInit: props<{pokemon:Pokemon}>(),
            removePokemonFromDeck: props<{ pokemon: Pokemon }>(),
        } 
    }
)