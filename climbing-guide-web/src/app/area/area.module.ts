import { GuideMapModule } from '../guide-map/guide-map.module';
import { AreaComponent } from './area.component';
import { areaRoutes } from './area.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
      CoreModule,
      BrowserModule,
      GuideMapModule,
      RouterModule.forChild(areaRoutes)
    ],
    declarations: [
      AreaComponent
    ],
    exports: [
      AreaComponent,
      RouterModule
    ]
})
export class AreaModule { }
