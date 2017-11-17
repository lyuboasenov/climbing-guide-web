import { GuideMapModule } from '../guide-map/guide-map.module';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      BrowserModule,
      GuideMapModule,
      RouterModule.forChild(homeRoutes)
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
