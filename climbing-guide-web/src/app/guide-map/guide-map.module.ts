import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { GuideMapComponent } from './guide-map.component';

import { BrowserModule } from '@angular/platform-browser';
import { NguiMapModule} from '@ngui/map';
import { GetRegionPositionPipe } from '../core/get-region-position.pipe';

@NgModule({
    imports: [
      BrowserModule,
      NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBpVmPYXwxfc7QNjFgOyFe3UoE2yRVhJv0'}),
      CoreModule
    ],
    declarations: [GuideMapComponent, GetRegionPositionPipe],
    exports: [GuideMapComponent]
})
export class GuideMapModule { }
