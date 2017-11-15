import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { EnvironmentSpecificResolver } from './core/environment-specific.resolver';
import { EnvironmentSpecificService } from './core/services/environment-specific.service';
import { HomeComponent } from './home';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
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
