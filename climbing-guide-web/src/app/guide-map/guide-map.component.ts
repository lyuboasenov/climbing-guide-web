import {Region} from '../core/models/region';
import {Component, OnInit, Input} from '@angular/core';

import {GuideService} from '../core/services/guide.service';
import { Marker, NguiMapComponent } from '@ngui/map';
import { Observable } from 'rxjs/Observable';

@Component({
   selector: 'app-guide-map',
   templateUrl: './guide-map.component.html',
   styleUrls: ['./guide-map.component.css']
})
export class GuideMapComponent implements OnInit {
   @Input() latitude: number = 51.678418;
   @Input() longitude: number = 7.809007;
   @Input() zoom: number = 7;
   mapType: string = 'hybrid';
   regions: Region[];

   constructor(private guideService: GuideService) {}
   ngOnInit() {
      if (window.navigator.geolocation) {
         window.navigator.geolocation.getCurrentPosition((position: Position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
         });
      }

      this.getRegions();
   }

   getRegions(): void {
      this.guideService
         .getAll()
         .subscribe(regions => this.regions = regions);
   }

   onMarkerClick(target: Marker) {
      return;
   }
}
