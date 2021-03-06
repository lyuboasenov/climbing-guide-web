import { GuideService } from './services/guide.service';
import { AccountService } from './services/account.service';
import { AuthenticationService } from './services/authentication.service';
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
    AccountService,
    AuthenticationService
  ]
})
export class CoreModule { }
