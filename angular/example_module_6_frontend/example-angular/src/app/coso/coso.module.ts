import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosoRoutingModule } from './coso-routing.module';
import { CosoListComponent } from './coso-list/coso-list.component';
import { CosoCreateComponent } from './coso-create/coso-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CosoListComponent, CosoCreateComponent],
    imports: [
        CommonModule,
        CosoRoutingModule,
        ReactiveFormsModule
    ]
})
export class CosoModule { }
