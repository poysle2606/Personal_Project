import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LibaryRoutingModule} from './libary-routing.module';
import {ListComponent} from './component/list/list-component';
import {CreateComponent} from './component/create/create-component';
import {EditComponent} from './component/edit/edit-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    LibaryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class LibraryModule {
}
