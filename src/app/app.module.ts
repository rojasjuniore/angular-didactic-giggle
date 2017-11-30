import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RepositoriesService } from './services/repositories.service';


@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RepositoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
