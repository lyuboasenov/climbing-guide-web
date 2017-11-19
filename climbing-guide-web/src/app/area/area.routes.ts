import { EnvironmentSpecificResolver } from '../core/environment-specific.resolver';
import { Routes } from '@angular/router';
import { AreaComponent } from './index';

export const areaRoutes: Routes = [
    {
      path: 'areas/:id',
      component: AreaComponent,
      data: { title: 'ClimbDB - an open source virtual climbing guide book' },
      resolve: { envSpecific: EnvironmentSpecificResolver }
    }
];
