import { EnvironmentSpecificResolver } from '../core/environment-specific.resolver';
import { Routes } from '@angular/router';
import { RegionComponent } from './index';

export const regionRoutes: Routes = [
    {
      path: 'regions/:id',
      component: RegionComponent,
      data: { title: 'ClimbDB - an open source virtual climbing guide book' },
      resolve: { envSpecific: EnvironmentSpecificResolver }
    }
];
