import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CensusListComponent } from './components/census-list/census-list.component';
import { CensusCreateComponent } from './components/census-create/census-create.component';
import { CensusEditComponent } from './components/census-edit/census-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: CensusListComponent },
  { path: 'create', component: CensusCreateComponent },
  { path: 'edit/:id', component: CensusEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
