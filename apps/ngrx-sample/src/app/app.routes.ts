import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'main'},
    {path:'main', loadChildren: async () => (await import('@org/pokemon')).pokemonRoutes},
];
