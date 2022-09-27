import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home/home'},
  {path: 'home', loadChildren: () => import('./home/home.component').then(module => module.HomeComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
