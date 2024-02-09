import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { ROUTER_FEATURE_KEY } from '@org/environment';
// import { provideEffects } from '@ngrx/effects';
import { deckFeature} from '@org/deck';
// import { DeckEffects } from '@org/deck';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    provideStore(),
    provideStoreDevtools(),
    provideState(ROUTER_FEATURE_KEY, routerReducer),
    provideRouterStore(),
    provideState(deckFeature), 
    // provideEffects(DeckEffects)
  ],
};