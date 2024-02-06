import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { pokemonFeature } from './pokemon/+states/pokemon.reducers';
import { PokemonEffects } from './pokemon/+states/pokemon.effects';

export const pokemonRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'List' },
  {
    path: 'List',
    loadComponent: async () =>
      (await import('../lib/poke-list/poke-list.component')).PokeListComponent,
    providers: [provideState(pokemonFeature), provideEffects(PokemonEffects)],
  },
  {
    path: 'Details/:id',
    loadComponent: async () =>
      (await import('./poke-details/poke-details.component'))
        .PokeDetailsComponent,
  },
];
//approot'ta olacak providear buraya tasinacak.
