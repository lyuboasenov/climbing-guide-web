import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';


import { RouteModule, AddRouteDialogComponent } from '../../libs/route/index';
import { MapModule } from '../../libs/map/index';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(homeRoutes),

    MatDialogModule,
    MatIconModule,
    MatButtonModule,

    MapModule,
    RouteModule,
  ],
  entryComponents: [
    AddRouteDialogComponent
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }
