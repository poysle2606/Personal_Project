import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CosoListComponent} from './coso-list/coso-list.component';
import {CosoCreateComponent} from './coso-create/coso-create.component';


const routes: Routes = [
  {path: 'list', component: CosoListComponent},
  {path: 'create', component: CosoCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CosoRoutingModule { }
