import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularList:Array<Object>;
  inTheaterList:Array<Object>;
  searchRes:Array<Object>;
  searchStr:string;

  constructor(private _movieService : MovieService) { 
    this._movieService.getPopular()
    .subscribe(res => {
      this.popularList = res.results;
    });
    
    this._movieService.getInTheater()
    .subscribe(res => {
      this.inTheaterList = res.results;
    });

  }

  searchMovies(){
    console.log(this.searchStr);

    this._movieService.searchMovies(this.searchStr)
    .subscribe(res => {
      this.searchRes = res.results;
    });

  }

  ngOnInit() {
  }

}
