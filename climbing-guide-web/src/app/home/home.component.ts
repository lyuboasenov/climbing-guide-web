import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRouteDialogComponent } from '../../libs/route/index';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public dialog: MatDialog) { }

  onAdd(): void {
    this.dialog.open(AddRouteDialogComponent);
  }
}
