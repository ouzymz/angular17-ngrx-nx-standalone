import { Injectable } from '@angular/core';
import { Pokemon } from '@org/environment';
import {  of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor() { }

//To simulate the service methods, we will use services as util methods..


  getDeck() {
    return 'deck';
  }

  addPokemon(pokemon:Pokemon) {
    console.log('pokemon added' + pokemon);
    return of(pokemon)
  }

  removePokemon() {
    return 'pokemon';
  }
  removeAll(){

  }

  saveDeck() {
    return 'deck';
  }


}
