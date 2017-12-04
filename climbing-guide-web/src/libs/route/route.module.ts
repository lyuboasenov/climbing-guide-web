import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Material design
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

// Own modules/components
import { AddRouteComponent } from './add-route/add-route.component';
import { AddRouteDialogComponent } from './add-route/add-route-dialog.component';
import { CoreModule } from '../core/core.module';
import { MapModule } from '../map/index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    // Own
    CoreModule,
    MapModule,
  ],
  declarations: [
    AddRouteComponent,
    AddRouteDialogComponent
  ],
  exports: [
    AddRouteComponent,
    AddRouteDialogComponent
  ]
})
export class RouteModule { }
