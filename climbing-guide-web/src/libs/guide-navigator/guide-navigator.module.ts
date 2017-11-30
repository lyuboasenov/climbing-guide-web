import { AddDialogComponent } from '../route/add/add.dialog.component';
import { CoreModule } from '../core/core.module';
import { GuideMapModule } from '../guide-map/guide-map.module';
import { GuideNavigatorComponent } from './guide-navigator.component';
import { RouteModule } from '../route/route.module';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

@NgModule({
  imports: [
    BrowserModule,
    //Material
    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    CoreModule,
    GuideMapModule,
    RouteModule
  ],
  entryComponents: [
    AddDialogComponent
  ],
  declarations: [
    GuideNavigatorComponent
  ],
  exports: [
    GuideNavigatorComponent
  ]
})
export class GuideNavigatorModule { }
