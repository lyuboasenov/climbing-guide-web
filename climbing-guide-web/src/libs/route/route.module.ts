import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { AddDialogComponent } from './add/add.dialog.component';
import { CoreModule } from '../core/core.module';
import { GuideMapModule } from '../guide-map/guide-map.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    GuideMapModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [AddComponent, AddDialogComponent],
  exports: [AddComponent, AddDialogComponent]
})
export class RouteModule { }
