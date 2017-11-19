import {Region} from '../core/models/region';
import {Component, OnInit, Input} from '@angular/core';

import {GuideService} from '../core/services/guide.service';
import { Model } from './guide-map.models';
import { Router } from '@angular/router';
import {Marker, NguiMapComponent} from '@ngui/map';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-guide-map',
  templateUrl: './guide-map.component.html',
  styleUrls: ['./guide-map.component.css']
})
export class GuideMapComponent implements OnInit {
  @Input() latitude: number = 51.678418;
  @Input() longitude: number = 7.809007;
  @Input() zoom: number = 7;
  @Input() items: Model[];

  mapType: string = 'hybrid';
  regions: Region[];

  constructor(private router: Router) {}

  ngOnInit() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position: Position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }

  onMarkerClick(event, model: Model) {
    const marker: any = event.target;

    for (const item of this.items) {
      marker.nguiMapComponent.closeInfoWindow(`iw-${item.id}`);
    }

    marker.nguiMapComponent.openInfoWindow(`iw-${model.id}`, marker);
  }

  onMarkerDoubleClick(event, model: Model) {
    this.router.navigate([model.uri]);
  }
}
