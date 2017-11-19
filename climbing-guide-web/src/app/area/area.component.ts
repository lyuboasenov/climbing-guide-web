import { Sector } from '../core/models/sector';
import { GuideService } from '../core/services/guide.service';
import { Model } from '../guide-map/guide-map.models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-cmp',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit, OnDestroy {
  sectors: Model[];
  areaId: number;
  private sub: any;

  constructor(private guideService: GuideService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
       this.areaId = +params['id']; // (+) converts string 'id' to a number
       this.getSectors();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSectors(): void {
    this.guideService
      .getSectors('en', this.areaId)
      .subscribe(sectors => this.sectors = this.mapSectors(sectors));
  }

  private mapSectors(sectors: Sector[]): Model[] {
    const models: Model[] = [];

    for (const sector of sectors) {
      models.push({
        id: sector.id,
        name: sector.name,
        info: sector.info,
        icon: '',
        position: [sector.latitude, sector.longitude],
        uri: `/sectors/${sector.id}/`
      });
    }

    return models;
  }
}
