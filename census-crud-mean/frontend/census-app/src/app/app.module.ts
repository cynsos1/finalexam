import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CensusCreateComponent } from './components/census-create/census-create.component';
import { CensusListComponent } from './components/census-list/census-list.component';

import { CensusEditComponent } from './components/census-edit/census-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CensusListComponent,
    CensusCreateComponent,
    CensusEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
