import { EnvironmentSpecificResolver } from '../core/environment-specific.resolver';
import { Routes } from '@angular/router';
import { SectorComponent } from './index';

export const sectorRoutes: Routes = [
    {
      path: 'sectors/:id',
      component: SectorComponent,
      data: { title: 'ClimbDB - an open source virtual climbing guide book' },
      resolve: { envSpecific: EnvironmentSpecificResolver }
    }
];
