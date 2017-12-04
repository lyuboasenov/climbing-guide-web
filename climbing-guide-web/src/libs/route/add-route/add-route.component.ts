import { Area } from '../../core/models/area';
import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GuideService } from '../../core/services/guide.service';
import { Sector } from '../../core/models/sector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-route',
    templateUrl: './add-route.component.html',
    styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {

    regions: Region[];
    filteredRegions: Region[];
    areas: Area[];
    sectors: Sector[];

    addRouteForm: FormGroup;

    constructor(private fb: FormBuilder, private guideService: GuideService) { }

    ngOnInit() {
        this.createForm();
        this.getRegions();
    }

    displayFn(region: Region): string {
        return region ? region.name : '';
    }

    getRegions(): void {
        this.guideService
            .getAllRegions()
            .subscribe(regions => {
                this.regions = regions;
                this.onRegionValueChanges('');
            });
    }

    getAreas(regionId: number): void {
        this.guideService
            .getAreas('en', regionId)
            .subscribe(areas => this.areas = areas);
    }

    getSectors(areaId: number): void {
        this.guideService
            .getSectors('en', areaId)
            .subscribe(sectors => this.sectors = sectors);
    }

    private createForm(): void {
        this.addRouteForm = this.fb.group({
            name: ['', Validators.required ],
            region: ['', Validators.required ],
            area: ['', Validators.required ],
            sector: ['', Validators.required ],
            latlng: ['', Validators.required ],
            info: '',
          });

          this.addRouteForm.get('region').valueChanges.subscribe(value => this.onRegionValueChanges(value));
          this.addRouteForm.get('area').valueChanges.subscribe(value => this.onAreaValueChanges(value));
          this.addRouteForm.get('sector').valueChanges.subscribe(value => this.onSectorValueChanges(value));
    }

    private onRegionValueChanges(value: string|Region): void {
        if (typeof value === 'string') {
            this.filteredRegions = this.regions.filter(region =>
                region.name.toLowerCase().includes(value.toLowerCase())
            );
        } else if (undefined !== value) {
            this.getAreas(value.id);
        }
    }

    private onAreaValueChanges(value: Area): void {
        this.getSectors(value.id);
    }

    private onSectorValueChanges(value: Sector): void {
    }
}
