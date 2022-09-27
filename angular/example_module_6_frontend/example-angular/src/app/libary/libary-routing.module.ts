import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './component/list/list-component';
import {CreateComponent} from './component/create/create-component';
import {EditComponent} from './component/edit/edit-component';


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibaryRoutingModule {
}
