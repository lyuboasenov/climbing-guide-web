import { Component, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component( {
    selector: 'app-add-dialog',
    templateUrl: './add.dialog.component.html',
    styleUrls: ['./add.dialog.component.css']
} )
export class AddDialogComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
