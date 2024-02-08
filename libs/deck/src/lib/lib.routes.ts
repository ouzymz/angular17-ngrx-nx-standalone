import { Route } from '@angular/router';
// import { provideState } from '@ngrx/store';
// import { deckFeature } from './+states/deck.reducers';
// import { provideEffects } from '@ngrx/effects';
// import * as deckEffects from './+states/deck.effects';

export const deckRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'Deck' },
  {
    path: 'Deck',
    loadComponent: async () =>
      (await import('./deck/deck.component')).DeckComponent,
    // providers: [provideState(deckFeature), provideEffects(deckEffects)],
  },
];
