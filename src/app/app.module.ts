import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavFavsComponent } from './nav-favs/nav-favs.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatInputModule, MatSelectModule,
   MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule,
    MatSortModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { FormFilmsComponent } from './form-films/form-films.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPodcastsComponent } from './form-podcasts/form-podcasts.component';
import { TableFilmsComponent } from './table-films/table-films.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFavsComponent,
    FormFilmsComponent,
    FormPodcastsComponent,
    TableFilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
