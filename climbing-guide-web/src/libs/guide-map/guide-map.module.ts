import { NgModule } from '@angular/core';
import { GuideMapComponent } from './guide-map.component';
import { Model } from './guide-map.models';
import { MatIconModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NguiMapModule} from '@ngui/map';

@NgModule({
    imports: [
      BrowserModule,
      MatIconModule,
      RouterModule,
      NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBpVmPYXwxfc7QNjFgOyFe3UoE2yRVhJv0'})
    ],
    declarations: [
      GuideMapComponent
    ],
    exports: [
      GuideMapComponent
    ]
})
export class GuideMapModule { }
