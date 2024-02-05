import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { LoadingState, RequestStatus } from '@org/environment';
import { Pokemon } from '../model/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { PaginatorState } from 'primeng/paginator';
import {  pokemonsOpened } from '../poke-list/+states/actions';
import { paginatorApiActions, pokemonApiActions } from './actions';

interface PokemonState {
  pokemons: EntityState<Pokemon>;
  pokemonsPaginator: PaginatorState;
  pokemonsRequestStatus: RequestStatus;
}

export const pokemonAdapter: EntityAdapter<Pokemon> =
  createEntityAdapter<Pokemon>();

const initState: PokemonState = {
  pokemons: pokemonAdapter.getInitialState(),
  pokemonsPaginator: {
    page: 0,
    first: 0,
    rows: 10,
    pageCount: 130,
  } as PaginatorState,
  pokemonsRequestStatus: LoadingState.IDLE,
};

export const pokemonFeature = createFeature({
  name: 'pokemon',
  reducer: createReducer(
    initState,
    on(pokemonsOpened, (state) => ({
      ...state,
      pokemonsRequestStatus: LoadingState.PENDING,
    })),
    on(paginatorApiActions.paginatorChanged, (state, {paginatorState} ) => ({
      ...state,
      pokemonsPaginator: paginatorState,
    })),
    on(pokemonApiActions.pokemonsFecthSuccess, (state, { pokemons }) => ({
      ...state,
      pokemons: pokemonAdapter.setAll(pokemons, state.pokemons),
    }))
  ),
});
