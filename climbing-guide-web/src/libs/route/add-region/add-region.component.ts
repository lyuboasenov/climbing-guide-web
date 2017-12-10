import { Error } from 'tslint/lib/error';
import { FormComponent } from '../../core/components/form.component';
import { Area } from '../../core/models/area';
import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../core/models/region';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GuideService } from '../../core/services/guide.service';
import { Sector } from '../../core/models/sector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-region',
    templateUrl: './add-region.component.html',
    styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent extends FormComponent<boolean> {

    constructor(fb: FormBuilder, private guideService: GuideService) { super(fb); }

    protected createForm(): FormGroup {
        return this.fb.group({
            name: ['', Validators.required ],
            info: ['', Validators.required ],
            restrictions: ['', Validators.required ],
            position: [null, Validators.required ]
          });
    }

    protected submitValid(): Observable<boolean> {
        throw new Error('Not implemented');
    }
}
