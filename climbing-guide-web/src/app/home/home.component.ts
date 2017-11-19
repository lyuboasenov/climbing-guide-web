import { Region } from '../core/models/region';
import { GuideService } from '../core/services/guide.service';
import { Model } from '../guide-map/guide-map.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cmp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regions: Model[];

  constructor(private guideService: GuideService) {}

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
    this.guideService
      .getAllRegions()
      .subscribe(regions => this.regions = this.mapRegions(regions));
  }

  private mapRegions(regions: Region[]): Model[] {
    const models: Model[] = [];

    for (const region of regions) {
      models.push({
        id: region.id,
        name: region.name,
        info: region.info,
        icon: '',
        position: [region.latitude, region.longitude],
        uri: `/regions/${region.id}/`
      });
    }

    return models;
  }
}
