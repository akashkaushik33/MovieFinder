import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieService } from "./services/movie.service";
import { JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { routing } from "./app.routes";

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
   
  ],
  imports: [
    BrowserModule ,
     JsonpModule,
     FormsModule,
     routing
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
