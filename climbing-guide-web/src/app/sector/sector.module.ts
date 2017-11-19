import { GuideMapModule } from '../guide-map/guide-map.module';
import { SectorComponent } from './sector.component';
import { sectorRoutes } from './sector.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
      CoreModule,
      BrowserModule,
      GuideMapModule,
      RouterModule.forChild(sectorRoutes)
    ],
    declarations: [
      SectorComponent
    ],
    exports: [
      SectorComponent,
      SectorModule
    ]
})
export class SectorModule { }
