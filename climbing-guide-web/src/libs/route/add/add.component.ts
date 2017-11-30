import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GuideService } from '../../core/services/guide.service';

@Component( {
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
} )
export class AddComponent implements OnInit {

    private regions: Region[];
    filteredRegions: Region[];
    @Input() selectedRegionValue: string = '';
    @Input() selectedRegion: Region;

    constructor(private guideService: GuideService) { }

    ngOnInit() {
        this.getRegions();
    }

    onSelectedRegionValueChange(newValue: string) {
        this.filteredRegions = this.regions.map(region => {
            if (region.name.indexOf(this.selectedRegionValue) >= 0) {
                return region;
            }
        });
    }

    displayFn( region: Region ): string {
        return region ? region.name : '---';
    }

    getRegions(): void {
        this.guideService
          .getAllRegions()
          .subscribe(regions => this.regions = regions);
    }
}
