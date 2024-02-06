import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '../../pokemon.service';
import { Store } from '@ngrx/store';
import { Pokemon } from '../model/models';
import * as PokemonActions from '../../poke-list/+states/poke-list.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { paginatorApiActions, pokemonApiActions } from './pokemon.actions';
import { pokemonFeature } from './pokemon.reducers';
import { pokemonDetailsActions } from '../../poke-details/+states/poke-details.actions';
import { selectRouterParam } from '@org/environment';

@Injectable()
export class PokemonEffects {
  constructor(
    private readonly actions: Actions,
    private readonly pokemonService: PokemonService,
    private readonly store: Store
  ) {}

  fecthPokemons$ = createEffect(() => {
    return this.actions.pipe(
      ofType(
        PokemonActions.pokemonsOpened,
        paginatorApiActions.paginatorChanged
      ),
      concatLatestFrom(() =>
        this.store.select(pokemonFeature.selectPokemonsPaginator).pipe(
          map((PaginatorState) => {
            console.log(PaginatorState);
            return PaginatorState;
          })
        )
      ),
      switchMap(([, PaginatorState]) =>
        this.pokemonService.getPokemons(PaginatorState).pipe(
          map((pokemons: Pokemon[]) =>
            pokemonApiActions.pokemonsFecthSuccess({ pokemons })
          ),
          catchError(() =>
            of(
              pokemonApiActions.pokemonsFetchedError({
                errorMessage: 'Error Fetching Single Product',
              })
            )
          )
        )
      )
    );
  });

  fecthPokemonDetails$ = createEffect(() => {
    return this.actions.pipe(
      ofType(pokemonDetailsActions.pageOpened),

      concatLatestFrom(() =>
        this.store.select(selectRouterParam('id')).pipe(map((id) => id))
      ),

      switchMap(([, id]) =>
        this.pokemonService.getPokemonDetails(id).pipe(
          map((pokemon) =>
            pokemonApiActions.singlePokemonFecthSuccess({ pokemon })
          ),
          catchError(() =>
            of(
              pokemonApiActions.singlePokemonFecthError({
                errorMessage: 'Error Fetching Single Product',
              })
            )
          )
        )
      )
    );
  });
}
