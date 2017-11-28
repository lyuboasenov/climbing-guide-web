import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddComponent],
  exports: [AddComponent]
})
export class RouteModule { }
