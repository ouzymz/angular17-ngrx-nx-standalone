import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { Store, createSelector } from '@ngrx/store';
import { pokemonDetailsActions } from './+states/poke-details.actions';
import { pokemonFeature } from '../+states/pokemon.reducers';
import { SkeletonModule } from 'primeng/skeleton';
import { SpinnerModule } from 'primeng/spinner';

export const vm = createSelector({
  pokemon:pokemonFeature.selectPokemon,
  LoadingState:pokemonFeature.selectPokemonsRequestStatus
})


@Component({
  selector: 'org-poke-details',
  standalone: true,
  imports: [CommonModule, AccordionModule, SkeletonModule, SpinnerModule,],
  templateUrl: 'poke-details.component.html',
  styleUrl: './poke-details.component.scss',
})
export class PokeDetailsComponent implements OnInit {
  constructor(private store: Store) {}

  vm$ = this.store.select(vm)


  ngOnInit() {
    this.store.dispatch(pokemonDetailsActions.pageOpened());

  }
}
