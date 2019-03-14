
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesComponent } from './places/places.component';
import { DetailComponent } from './detail/detail.component';

// Manager of proyects routes
const routes: Routes = [
  {path: '', redirectTo: '/places', pathMatch: 'full'},
  {path: 'places', component: PlacesComponent},
  {path: 'detail/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
