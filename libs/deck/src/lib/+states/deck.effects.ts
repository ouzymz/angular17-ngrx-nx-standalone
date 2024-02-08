//FUNCTIONAL VERSION OF EFFECTS


// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { DeckService } from '../deck.service';
// import { Injectable, inject } from '@angular/core';
// import { catchError, map, mergeMap, of } from 'rxjs';
// import { deckApiActions } from './deck.actions';
// import { deckListApiActions } from '../deck-list/+states/deck-list.actions';

// export const addPokemonDeck = createEffect(
//   () => {
//     const deckService = inject(DeckService);

//     return inject(Actions).pipe(
//       ofType(deckListApiActions.addToDeckInit),
//       mergeMap(({ pokemon }) =>
//         deckService.addPokemon(pokemon).pipe(
//           map(() => deckApiActions.addToDeckSuccess()),
//           catchError(() =>
//             of(
//               deckApiActions.addToDeckError({
//                 errorMessage: 'Error adding pokemon to deck',
//               })
//             )
//           )
//         )
//       )
//     );
//   },
//   { functional: true }
// );

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { DeckService } from "../deck.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { deckApiActions } from "./deck.actions";
import { deckListApiActions } from "../deck-list/+states/deck-list.actions";


@Injectable()
export class DeckEffects {
  constructor(
    private readonly actions: Actions,
    private readonly deckService: DeckService,
    private readonly store: Store
  ) {}


  addPokemonDeck$ = createEffect(
      () => {
    
        return this.actions.pipe(
          ofType(deckListApiActions.addToDeckInit),
          mergeMap(({ pokemon }) =>
            this.deckService.addPokemon(pokemon).pipe(
              map(() => deckApiActions.addToDeckSuccess()),
              catchError(() =>
                of(
                  deckApiActions.addToDeckError({
                    errorMessage: 'Error adding pokemon to deck',
                  })
                )
              )
            )
          )
        );
      })
    }