import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from "@angular/platform-browser/animations";
import { pokemonFeature, PokemonEffects } from '@org/pokemon';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(),
    provideState(pokemonFeature),
    provideEffects(PokemonEffects),
    provideStoreDevtools(),
    provideAnimations(),
  ],
};
