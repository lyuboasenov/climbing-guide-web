import {Region} from '../core/models/region';
import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

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

  @Output() itemSelected: EventEmitter<Model> = new EventEmitter();

  mapType: string = 'hybrid';
  private clickTimeout: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onMarkerClick(event, model: Model) {
    this.clickTimeout = setTimeout(() => {
      console.log(1);
      const marker: any = event.target;
      console.log(marker);
      console.log(model);

      for (const item of this.items) {
        marker.nguiMapComponent.closeInfoWindow(`iw-${item.id}`);
      }

      marker.nguiMapComponent.openInfoWindow(`iw-${model.id}`, marker);
    }, 300);
  }

  onMarkerDoubleClick(event, model: Model) {
    clearTimeout(this.clickTimeout);
    this.itemSelected.emit(model);
  }
}
