import { Routes } from '@angular/router';
import { HomeComponent } from './index';

export const homeRoutes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'ClimbDB - an open source virtual climbing guide book' }
    }
];
