import {
  Area,
  Region,
  Route,
  Sector,

  GuideService
} from '../../core/index';
import {  } from '../core/models/region';

import { MapModel } from '../map/map.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-navigator',
  templateUrl: './map-navigator.component.html',
  styleUrls: ['./map-navigator.component.css']
})
export class MapNavigatorComponent implements OnInit {

  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 10;
  items: MapModel[];
  private level: number = 0;

  constructor(private guideService: GuideService) { }

  ngOnInit(): void {
    this.getItems();
  }

  onItemSelecte(item: MapModel) {
    this.level++;
    this.getItems(item);
  }

  getItems(item: MapModel = null): void {
    if (null == item) {
      this.getRegions();
      this.zoom = 10;
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position: Position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        });
      }
    } else {
      this.latitude = item.position[0];
      this.longitude = item.position[1];

      if (this.level === 1) {
        this.getAreas(item.id);
        this.zoom = 12;
      } else if (this.level === 2) {
        this.getSectors(item.id);
        this.zoom = 16;
      } else if (this.level >= 3) {
        this.getRoutes(item.id);
        this.zoom = 20;
      }
    }
  }

  getRoutes(sectorId: number): void {
    this.guideService
      .getRoutes('en', sectorId)
      .subscribe(routes => this.items = this.mapRoutes(routes));
  }

  private mapRoutes(routes: Route[]): MapModel[] {
    const models: MapModel[] = [];

    for (const route of routes) {
      models.push({
        id: route.id,
        name: route.name,
        info: route.info,
        icon: 'place',
        color: 'orange',
        thumb: route.schemaThumb,
        position: [route.latitude, route.longitude],
        uri: `/routes/${route.id}/`
      });
    }

    return models;
  }

  getSectors(areaId: number): void {
    this.guideService
      .getSectors('en', areaId)
      .subscribe(sectors => this.items = this.mapSectors(sectors));
  }

  private mapSectors(sectors: Sector[]): MapModel[] {
    const models: MapModel[] = [];

    for (const sector of sectors) {
      models.push({
        id: sector.id,
        name: sector.name,
        info: sector.info,
        icon: 'layers',
        color: 'blue',
        position: [sector.latitude, sector.longitude],
        uri: `/sectors/${sector.id}/`
      });
    }

    return models;
  }

  getAreas(regionId: number): void {
    this.guideService
      .getAreas('en', regionId)
      .subscribe(areas => this.items = this.mapAreas(areas));
  }

  private mapAreas(areas: Area[]): MapModel[] {
    const models: MapModel[] = [];

    for (const area of areas) {
      models.push({
        id: area.id,
        name: area.name,
        info: area.info,
        icon: 'map',
        color: 'purple',
        position: [area.latitude, area.longitude],
        uri: `/areas/${area.id}/`
      });
    }

    return models;
  }

  getRegions(): void {
    this.guideService
      .getAllRegions()
      .subscribe(regions => this.items = this.mapRegions(regions));
  }

  private mapRegions(regions: Region[]): MapModel[] {
    const models: MapModel[] = [];

    for (const region of regions) {
      models.push({
        id: region.id,
        name: region.name,
        info: region.info,
        icon: 'terrain',
        color: 'yellow',
        position: [region.latitude, region.longitude],
        uri: `/regions/${region.id}/`
      });
    }

    return models;
  }

}
