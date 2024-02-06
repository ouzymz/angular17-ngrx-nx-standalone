import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { LoadingState, RequestStatus } from '@org/environment';
import { DetailedPokemon, Pokemon } from '../model/models';
import { createFeature, createReducer, on } from '@ngrx/store';
import { PaginatorState } from 'primeng/paginator';
import {  pokemonsOpened } from '../../poke-list/+states/poke-list.actions';
import { paginatorApiActions, pokemonApiActions } from './pokemon.actions';
import { pokemonDetailsActions } from '../../poke-details/+states/poke-details.actions';

interface PokemonState {
  pokemon: DetailedPokemon ;
  pokemons: EntityState<Pokemon>;
  pokemonsPaginator: PaginatorState;
  pokemonsRequestStatus: RequestStatus;
}


export const pokemonAdapter: EntityAdapter<Pokemon> =
  createEntityAdapter<Pokemon>();

const initState: PokemonState = {
  pokemon: {description: ''} as DetailedPokemon,
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
    on(pokemonDetailsActions.pageOpened, (state) => ({
      ...state,
      pokemonsRequestStatus: LoadingState.PENDING,
    })),
    on(paginatorApiActions.paginatorChanged, (state, {paginatorState} ) => ({
      ...state,
      pokemonsPaginator: paginatorState,
    })),
    on(pokemonApiActions.pokemonsFecthSuccess, (state, { pokemons }) => ({
      ...state,
      pokemonsRequestStatus: LoadingState.FULFILLED,
      pokemons: pokemonAdapter.setAll(pokemons, state.pokemons),
    })),
    on(pokemonApiActions.singlePokemonFecthSuccess, (state, { pokemon }) => ({
      ...state,
      pokemonsRequestStatus: LoadingState.FULFILLED,
      pokemon: pokemon,
    }))

  ),
});
