import { GuideService, Region } from '../../core/index';
import { MapModel } from './map.model';

import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

import { Marker, NguiMapComponent } from '@ngui/map';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() latitude: number = 51.678418;
  @Input() longitude: number = 7.809007;
  @Input() zoom: number = 7;
  @Input() items: MapModel[];
  selecedItem: MapModel;
  center = { lat: this.latitude, lng: this.longitude };

  @Output() itemSelected: EventEmitter<MapModel> = new EventEmitter();

  mapType: string = 'hybrid';
  private clickTimeout: any = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (null != changes.latitude
      || null != changes.longitude) {
      this.center = { lat: +this.latitude, lng: +this.longitude };
    }
  }

  onMarkerClick(event, model: MapModel) {
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

  onMarkerDoubleClick(event, model: MapModel) {
    clearTimeout(this.clickTimeout);
    this.itemSelected.emit(model);
  }
}
