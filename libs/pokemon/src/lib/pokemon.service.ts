import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, forkJoin, map, switchMap,  } from 'rxjs';
import { DetailedPokemon, Pokemon, PokemonResponse, PokemonStat, SpeciesResponse } from "@org/environment";
import { environment } from '@org/environment';
import { PaginatorState } from 'primeng/paginator';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  http = inject(HttpClient);
  getPokemons(paginatorState: PaginatorState) {
    return this.http.get(`${environment.apiUrl}/?offset=${paginatorState.first}&limit=20`).pipe(
      map((response: any) => response.results),
      switchMap((pokemons: any[]) => {
        return forkJoin(pokemons.map(pokemon => this.http.get(pokemon.url))).pipe(map((pokemonShortDetails: any[]) => {
          return pokemonShortDetails.map(pokemon => {
            const returningPokemon: Pokemon = {
              id: pokemon.id,
              name: pokemon.name,
              img: `${environment.svgUrl}${pokemon.id}.png`,
              types: pokemon.types.map((type: any) => type.type.name).join(', '),
            };
            return returningPokemon;
          });
        }));
      }),
    );
  }
  
  getPokemonDetails(id: string | undefined) {
    const species$ = this.http.get<SpeciesResponse>(`https://pokeapi.co/api/v2/pokemon-species/${id}`).pipe(
      map((species: any) => species.flavor_text_entries.find((entry: any) => entry.language.name === 'en').flavor_text)
    );
  
    const pokemon$ = this.http.get<PokemonResponse>(`${environment.apiUrl}/${id}`);
  
    return forkJoin({ species: species$, pokemon: pokemon$ }).pipe(
      delay(2500), // to simulate a slow network
      map(({ species, pokemon }) => {
        const detailedPokemon: DetailedPokemon = {
          id: pokemon.id,
          name: pokemon.name,
          img: `${environment.svgUrl}${pokemon.id}.png`,
          types: pokemon.types.map((type: any) => type.type.name),
          description: species,
          height: pokemon.height,
          weight: pokemon.weight,
          abilities: pokemon.abilities.map((ability: any) => ability.ability.name),
          base_experience: pokemon.base_experience,
          stats: pokemon.stats.map<PokemonStat>((stat) => {
            return {
              stat: {name: stat.stat.name},
              base_stat: stat.base_stat,
            }
          }),
        };
        return detailedPokemon;
      })
    );
  }

}