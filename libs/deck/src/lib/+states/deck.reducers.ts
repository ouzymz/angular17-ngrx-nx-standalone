import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { DeckStatus } from '../shared/models';
import { Pokemon } from '@org/environment';
import { createFeature, createReducer, on } from '@ngrx/store';
import { deckListApiActions } from '../deck-list/+states/deck-list.actions';

export interface DeckState {
  pokemons: EntityState<Pokemon>;
  deckStatus: DeckStatus;
  quantity: number;
}

export const deckAdapter: EntityAdapter<Pokemon> = createEntityAdapter();

const initialState: DeckState = {
  pokemons: deckAdapter.getInitialState(),
  deckStatus: DeckStatus.NOTOKAY,
    quantity: 0,
};

export const deckFeature = createFeature({
  name: 'deck',
  reducer: createReducer(
    initialState,
    on(deckListApiActions.addToDeckInit, (state, { pokemon }) => {

    return {...state, pokemons: deckAdapter.addOne(pokemon, state.pokemons), deckStatus: ((state.quantity+1)==30)?DeckStatus.OKAY:DeckStatus.NOTOKAY, quantity: state.quantity + 1};
    }),
  ),
});
