import { Component, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component( {
    selector: 'app-add-route-dialog',
    templateUrl: './add-route-dialog.component.html',
    styleUrls: ['./add-route-dialog.component.css']
} )
export class AddRouteDialogComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
