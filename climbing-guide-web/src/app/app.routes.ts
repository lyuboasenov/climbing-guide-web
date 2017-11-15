import { EnvironmentSpecificResolver } from './core/environment-specific.resolver';
import { HomeComponent } from './home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent, resolve: { envSpecific: EnvironmentSpecificResolver } }
];
