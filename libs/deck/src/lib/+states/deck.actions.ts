import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const deckApiActions = createActionGroup( {
    source: 'Deck API',
    events: {
        
        addToDeckSuccess: emptyProps(), 
        addToDeckError: props<{ errorMessage: string }>(),

        removeFromDeckSuccess: emptyProps(),
        removeFromDeckError: props<{ errorMessage: string }>(),

        removeAllSuccess: emptyProps(),
        removeAllError: props<{ errorMessage: string }>(),
    }
})