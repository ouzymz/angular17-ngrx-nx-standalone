import { Route } from '@angular/router';

export const pokemonRoutes: Route[] = [
  { path: '', pathMatch: 'full',redirectTo: 'pokeList' },
  { path: 'pokeList', loadComponent: async () => (await import('./pokemon/poke-list/poke-list.component')).PokeListComponent},
  { path: 'pokeDetails/:id', loadComponent: async () => (await import('./pokemon/poke-details/poke-details.component')).PokeDetailsComponent}
];
