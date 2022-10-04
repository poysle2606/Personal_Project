import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SercurityRoutingModule } from './sercurity-routing.module';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {LoginComponent} from '../login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {VerityResestPasswordComponent} from '../verity-resest-password/verity-resest-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    VerityResestPasswordComponent,
  ],
  imports: [
    CommonModule,
    SercurityRoutingModule,
    ReactiveFormsModule
  ]
})
export class SercurityModule { }
