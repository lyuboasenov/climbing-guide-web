import { FormComponent } from '../../core/components/form.component';
import { Area } from '../../core/models/area';
import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GuideService } from '../../core/services/guide.service';
import { Sector } from '../../core/models/sector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LatLngModel } from '../../map/index';

@Component({
    selector: 'app-add-route',
    templateUrl: './add-route.component.html',
    styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent extends FormComponent<boolean> implements OnInit {

    regions: Region[];
    filteredRegions: Region[];
    areas: Area[];
    sectors: Sector[];

    constructor(fb: FormBuilder, private guideService: GuideService) { super(fb); }

    ngOnInit() {
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

    createForm(): FormGroup {
        return this.fb.group({
            name: ['', Validators.required ],
            region: ['', Validators.required ],
            area: ['', Validators.required ],
            sector: ['', Validators.required ],
            position: [null, Validators.required ],
            info: ['']
          });
    }

    protected addPropertyChangeListeners(): void {
        this.form.get('region').valueChanges.subscribe(value => this.onRegionValueChanges(value));
        this.form.get('area').valueChanges.subscribe(value => this.onAreaValueChanges(value));
        this.form.get('sector').valueChanges.subscribe(value => this.onSectorValueChanges(value));
        this.form.get('position').valueChanges.subscribe(value => this.onPositionValueChanges(value));
    }

    private onRegionValueChanges(value: string|Region): void {
        if (typeof value === 'string') {
            const addNewRegion: Region = {
                id: -1,
                name: '+ Add new region',
                info: '',
                latitude: 0,
                longitude: 0,
                size: 20
            };
            this.filteredRegions = [addNewRegion, ...this.regions.filter(region =>
                region.name.toLowerCase().includes(value.toLowerCase())
            )];
        } else if (undefined !== value) {
            if (value.id === -1) {
                // add new region
                // add new region
            } else {
                this.getAreas(value.id);
            }
        }
    }

    private onAreaValueChanges(value: Area): void {
        this.getSectors(value.id);
    }

    private onSectorValueChanges(value: Sector): void {
    }

    onPositionValueChanges(value: LatLngModel) {
        console.log(value);
    }

    submitValid(): Observable<boolean> {
        throw new Error('Not implemented');
    }
}
