import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Pokemon } from '../model/models';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PokemonService } from '../../pokemon.service';



@Component({
  selector: 'org-poke-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, CarouselModule, PaginatorModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pokemons: Pokemon[] | any[] = [];


  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  repsonsiveOptions: any[] | undefined;

  first: number = 0;

  rows: number = 10;

  onPageChange(event: PaginatorState) {
    this.first = event.first as number;
    this.rows = event.rows as number;
  }


  constructor(private PokemonService: PokemonService) {



    this.PokemonService.getPokemons().subscribe((pokemons: any) => { this.pokemons = pokemons; console.log(pokemons) });



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