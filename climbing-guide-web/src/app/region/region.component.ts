import { Area } from '../core/models/area';
import { GuideService } from '../core/services/guide.service';
import { Model } from '../guide-map/guide-map.models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-cmp',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit, OnDestroy {
  areas: Model[];
  regionId: number;
  private sub: any;

  constructor(private guideService: GuideService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.regionId = +params['id']; // (+) converts string 'id' to a number
       this.getAreas();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getAreas(): void {
    this.guideService
      .getAreas('en', this.regionId)
      .subscribe(areas => this.areas = this.mapAreas(areas));
  }

  private mapAreas(areas: Area[]): Model[] {
    const models: Model[] = [];

    for (const area of areas) {
      models.push({
        id: area.id,
        name: area.name,
        info: area.info,
        icon: '',
        position: [area.latitude, area.longitude],
        uri: `/areas/${area.id}/`
      });
    }

    return models;
  }
}
