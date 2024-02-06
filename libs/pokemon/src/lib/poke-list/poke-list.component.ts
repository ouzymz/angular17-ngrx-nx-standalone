import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PokemonService } from '../pokemon.service';
import * as actions from './+states/poke-list.actions';
import { Store } from '@ngrx/store';
// import { createSelector } from '@ngrx/store';
import { selectPokemons } from '../pokemon/+states/pokemon.selectors';
import { paginatorApiActions } from '../pokemon/+states/pokemon.actions';
import { RouterModule } from '@angular/router';

// const productLustVm = createSelector({

// })

@Component({
  selector: 'org-poke-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, CarouselModule, PaginatorModule, RouterModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pokemons$ = this.store.select(selectPokemons);


  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];

  first: number = 0;
  rows: number = 10;

  onPageChange(event: PaginatorState) {
    this.store.dispatch(paginatorApiActions.paginatorChanged({ paginatorState: event }));

  }


  constructor(private PokemonService: PokemonService,private readonly store: Store) {

    this.store.dispatch(actions.pokemonsOpened());


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}