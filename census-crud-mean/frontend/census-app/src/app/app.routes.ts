import { Routes } from '@angular/router';
import { CensusListComponent } from './components/census-list/census-list.component';
import { CensusCreateComponent } from './components/census-create/census-create.component';
import { CensusEditComponent } from './components/census-edit/census-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: CensusListComponent },
  { path: 'create', component: CensusCreateComponent },
  { path: 'edit/:id', component: CensusEditComponent }
];
