import { GuideMapModule } from '../guide-map/guide-map.module';
import { RegionComponent } from './region.component';
import { regionRoutes } from './region.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
      CoreModule,
      BrowserModule,
      GuideMapModule,
      RouterModule.forChild(regionRoutes)
    ],
    declarations: [
      RegionComponent
    ],
    exports: [
      RegionComponent,
      RouterModule
    ]
})
export class RegionModule { }
