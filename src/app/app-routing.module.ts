import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFilmsComponent } from './form-films/form-films.component';
import { FormPodcastsComponent } from './form-podcasts/form-podcasts.component';
import { TableFilmsComponent } from './table-films/table-films.component';

const routes: Routes = [
  { path: 'cadastrar', component: FormFilmsComponent},
  { path: 'listar', component: TableFilmsComponent},
  { path: 'podcasts', component: FormPodcastsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
