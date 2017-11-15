import { EnvironmentSpecificResolver } from './environment-specific.resolver';
import { EnvironmentSpecificService } from './services/environment-specific.service';
import { GetRegionPositionPipe } from './get-region-position.pipe';
import { GuideService } from './services/guide.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    GuideService,
    GetRegionPositionPipe,
    EnvironmentSpecificService,
    EnvironmentSpecificResolver
  ]
})
export class CoreModule { }
