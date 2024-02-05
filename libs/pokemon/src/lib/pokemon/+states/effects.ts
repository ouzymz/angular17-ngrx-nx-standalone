// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { PokemonService } from '../../pokemon.service';
// import { Store } from '@ngrx/store';
// import { Pokemon } from '../model/models';
// import * as PokemonActions from '../poke-list/+states/actions';
// import { map, switchMap } from 'rxjs';

// @Injectable()
// export class PokemonEffects {
//     constructor(
//         private readonly actions: Actions,
//         private readonly pokemonService: PokemonService,
//         private readonly store: Store
//     ) { }

//     fecthPokemons$ = createEffect(() => this.actions.pipe(
//         ofType(PokemonActions.pokemonsOpened),
//         switchMap(() => this.pokemonService.getPokemons().pipe(
//             map((pokemons: Pokemon[]) => PokemonActions.pokemonsLoaded({ pokemons }))
//         ))
//     )
// }
