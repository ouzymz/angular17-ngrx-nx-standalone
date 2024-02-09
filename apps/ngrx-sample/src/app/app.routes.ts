import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'Poke' },
  {
    path: 'Poke',
    loadChildren: async () => (await import('@org/pokemon')).pokemonRoutes,
  },
  {
    path: 'PokeDeck',
    loadChildren: async () => (await import('@org/deck')).deckRoutes,
  },
  
];
