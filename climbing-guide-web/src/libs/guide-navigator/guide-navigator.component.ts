import { Area } from '../core/models/area';
import { Region } from '../core/models/region';
import { Route } from '../core/models/route';
import { Sector } from '../core/models/sector';
import { GuideService } from '../core/services/guide.service';
import { Model } from '../guide-map/guide-map.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-navigator',
  templateUrl: './guide-navigator.component.html',
  styleUrls: ['./guide-navigator.component.css']
})
export class GuideNavigatorComponent implements OnInit {

  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 10;
  items: Model[];
  private level: number = 0;

  constructor(private guideService: GuideService) {}

  ngOnInit(): void {
    this.getItems();
  }

  onItemSelecte(item: Model) {
    this.level++;
    this.getItems(item);
  }

  getItems(item: Model = null): void {
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
        this.zoom = 10;
      } else if (this.level === 2) {
        this.getSectors(item.id);
        this.zoom = 13;
      } else if (this.level >= 3) {
        this.getRoutes(item.id);
        this.zoom = 16;
      }
    }
  }

  getRoutes(sectorId: number): void {
    this.guideService
      .getRoutes('en', sectorId)
      .subscribe(routes => this.items = this.mapRoutes(routes));
  }

  private mapRoutes(routes: Route[]): Model[] {
    const models: Model[] = [];

    for (const route of routes) {
      models.push({
        id: route.id,
        name: route.name,
        info: route.info,
        icon: 'place',
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

  private mapSectors(sectors: Sector[]): Model[] {
    const models: Model[] = [];

    for (const sector of sectors) {
      models.push({
        id: sector.id,
        name: sector.name,
        info: sector.info,
        icon: 'layers',
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

  private mapAreas(areas: Area[]): Model[] {
    const models: Model[] = [];

    for (const area of areas) {
      models.push({
        id: area.id,
        name: area.name,
        info: area.info,
        icon: 'map',
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

  private mapRegions(regions: Region[]): Model[] {
    const models: Model[] = [];

    for (const region of regions) {
      models.push({
        id: region.id,
        name: region.name,
        info: region.info,
        icon: 'M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z',
        position: [region.latitude, region.longitude],
        uri: `/regions/${region.id}/`
      });
    }

    return models;
  }

}
