import {Region} from '../core/models/region';
import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';

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
export class GuideMapComponent implements OnInit, OnChanges {
  @Input() latitude: number = 51.678418;
  @Input() longitude: number = 7.809007;
  @Input() zoom: number = 7;
  @Input() items: Model[];
  selecedItem: Model;
  center = { lat: this.latitude, lng: this.longitude };

  @Output() itemSelected: EventEmitter<Model> = new EventEmitter();

  mapType: string = 'hybrid';
  private clickTimeout: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (null != changes.latitude
        || null != changes.longitude) {
      this.center = { lat: +this.latitude, lng: +this.longitude };
    }
  }

  onMarkerClick(event, model: Model) {
    this.clickTimeout = setTimeout(() => {
      const marker: any = event.target;
      this.selecedItem = model;
      console.log(this.selecedItem);
      console.log(event);

      if (null != marker
        && null != marker.nguiMapComponent) {
        marker.nguiMapComponent.openInfoWindow(`iw-details`, marker);
      }
    }, 300);
  }

  onMarkerDoubleClick(event, model: Model) {
    clearTimeout(this.clickTimeout);
    this.itemSelected.emit(model);
  }
}
