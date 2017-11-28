import { CoreModule } from '../core/core.module';
import { GuideMapModule } from '../guide-map/guide-map.module';
import { GuideNavigatorComponent } from './guide-navigator.component';
import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NguiMapModule} from '@ngui/map';

@NgModule({
    imports: [
      BrowserModule,
      //Material
      MatIconModule,
      MatButtonModule,
      
      CoreModule,
      GuideMapModule
    ],
    declarations: [
      GuideNavigatorComponent
    ],
    exports: [
      GuideNavigatorComponent
    ]
})
export class GuideNavigatorModule { }
