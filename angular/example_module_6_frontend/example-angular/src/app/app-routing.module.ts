import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home/home'},
    {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
    {path: 'CoSo', loadChildren: () => import('./coso/coso.module').then(module => module.CosoModule)},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
