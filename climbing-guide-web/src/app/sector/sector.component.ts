import { Route } from '../core/models/route';
import { GuideService } from '../core/services/guide.service';
import { Model } from '../guide-map/guide-map.models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sector-cmp',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit, OnDestroy {
  routes: Model[];
  sectorId: number;
  private sub: any;

  constructor(private guideService: GuideService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.sectorId = +params['id']; // (+) converts string 'id' to a number

      console.log(this.sectorId);

       this.getRoutes();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRoutes(): void {
    this.guideService
      .getRoutes('en', this.sectorId)
      .subscribe(routes => this.routes = this.mapRoutes(routes));
  }

  private mapRoutes(routes: Route[]): Model[] {
    const models: Model[] = [];

    for (const route of routes) {
      models.push({
        id: route.id,
        name: route.name,
        info: route.info,
        icon: route.schemaThumb,
        position: [route.latitude, route.longitude],
        uri: `/routes/${route.id}/`
      });
    }

    return models;
  }
}
