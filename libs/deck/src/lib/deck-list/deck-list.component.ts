import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListModule } from 'primeng/orderlist';
import { Store } from '@ngrx/store';
import { deckSelectors } from '../+states/deck.selectors';
import { DeckEffects } from '../+states/deck.effects';
// import { deckFeature } from '../+states/deck.reducers';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';

export const effectProviders = [DeckEffects,   {
  provide: USER_PROVIDED_EFFECTS,
  multi: true,
  useValue: [DeckEffects],
}]

// export const featureProvider =[
//   deckFeature,
//   {
//     multi: true,
//     useValue: [deckFeature],
//   },

// ]

@Component({
  selector: 'org-deck-list',
  standalone: true,
  imports: [CommonModule, OrderListModule],
  // providers: [effectProviders, featureProvider],
  providers: [effectProviders],
  template: `
  @if(pokemons$ | async){
    <p-orderList
      [value]="(pokemons$ | async)!"
      [listStyle]="{ 'max-height': '30rem' }"
      header="Poke Deck"
      filterBy="name"
      filterPlaceholder="Filter by name"
    >
      <ng-template let-pokemon pTemplate="item">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
          <img
            src="{{
              pokemon.img
            }}"
            [alt]="pokemon.name"
            class="w-4rem shadow-2 flex-shrink-0 border-round"
          />
          <div class="flex-1 flex flex-column gap-2">
            <span class="font-bold">{{ pokemon.name }}</span>
            <div class="flex align-items-center gap-2">
              <i class="pi pi-tag text-sm"></i>
              <span>{{ pokemon.types[0] }}</span>
            </div>
          </div>
          <span class="font-bold text-900">{{  pokemon.id }}</span>
        </div>
      </ng-template>
    </p-orderList>
  }@else{
    <p> No Pokemons in the deck</p>
  }`,
  styleUrl: './deck-list.component.scss',
})

export class DeckListComponent {
  store = inject(Store);
  pokemons$ = this.store.select(deckSelectors);
}
