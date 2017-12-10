import { ControlValueAccessor } from '@angular/forms/src/directives';
import { GuideService, Region } from '../../core/index';
import { LatLngModel } from './map-place-selector.model';

import { forwardRef, Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { Marker, NguiMapComponent } from '@ngui/map';

import { Observable } from 'rxjs/Observable';
import { PlaceModel } from './map-place-selector.model';

@Component({
  selector: 'app-map-place-selector',
  templateUrl: './map-place-selector.component.html',
  styleUrls: ['./map-place-selector.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => MapPlaceSelectorComponent),
    }
  ]
})
export class MapPlaceSelectorComponent implements OnInit, OnChanges, ControlValueAccessor {

  private place: PlaceModel = {
    position: { lat: 51.678418, lng: 7.809007 },
    zoom: 7
  };

  zoom: number = 7;

  center = { lat: this.place.position.lat, lng: this.place.position.lng };
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit() {
    this.onPositionChanged();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (null != changes.position) {
      this.onPositionChanged();
    }
  }

  onPositionChanged() {
    this.center = { lat: this.place.position.lat, lng: this.place.position.lng };
    this.propagateChange(this.place);
  }

  onZoomValueChanged() {
    this.place.zoom = this.zoom;
    this.propagateChange(this.place);
  }

  onZoomChanged({target: tg}) {
    this.zoom = tg.zoom;
    this.onZoomValueChanged();
  }

  dragEnded({target: marker}) {
    this.place.position.lat = marker.position.lat();
    this.place.position.lng = marker.position.lng();

    this.onPositionChanged();
  }

    public writeValue(value: any): void {
      if (value !== undefined &&
        value instanceof PlaceModel) {
        this.place = value;
      }
    }

    public registerOnChange(fn: any): void {
      this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {}

    public setDisabledState(isDisabled: boolean): void {
        // throw new Error('Not implemented yet.');
    }
}
