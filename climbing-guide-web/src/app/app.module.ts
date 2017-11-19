import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { EnvironmentSpecificResolver } from './core/environment-specific.resolver';
import { EnvironmentSpecificService } from './core/services/environment-specific.service';
import { RegionModule } from './region/region.module';
import { AreaModule } from './area/area.module';
import { HomeModule } from './home/home.module';
import { SectorModule } from './sector/sector.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RegionModule,
    AreaModule,
//    SectorModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    EnvironmentSpecificService,
    EnvironmentSpecificResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
