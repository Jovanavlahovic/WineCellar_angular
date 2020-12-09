import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { EditWineComponent } from './wines/edit-wine/edit-wine.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';

const routes: Routes = [
  {path: 'wines', component: WineListComponent},
  {path: 'wines/add', component: EditWineComponent},
  {path: 'wines/add/:id', component: EditWineComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'wines', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
