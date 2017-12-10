import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { MapNavigatorComponent } from './map-navigator/map-navigator.component';
import { MapPlaceSelectorComponent } from './map-place-selector/map-place-selector.component';

import { CoreModule } from '../core/index';

import { MatIconModule, MatButtonModule } from '@angular/material';


import { NguiMapModule } from '@ngui/map';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,

        // Material
        MatIconModule,
        MatButtonModule,

        // Own
        CoreModule,

        // Other
        NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBpVmPYXwxfc7QNjFgOyFe3UoE2yRVhJv0' })
    ],
    declarations: [
        MapComponent,
        MapNavigatorComponent,
        MapPlaceSelectorComponent
    ],
    exports: [
        MapComponent,
        MapNavigatorComponent,
        MapPlaceSelectorComponent
    ]
})
export class MapModule { }
