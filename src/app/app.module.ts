import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { AboutComponent } from './core/about/about.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { EditWineComponent } from './wines/edit-wine/edit-wine.component';
import { PaginationComponent } from './wines/pagination/pagination.component';
import { SearchComponent } from './wines/search/search.component';
import { TableComponent } from './wines/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    WineListComponent,
    EditWineComponent,
    PaginationComponent,
    SearchComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
