import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class MovieService {
  apiKey :string;
  searchStr:string;

  constructor(private _jsonp:Jsonp) {
     this.apiKey = '13e556517a6530f85508fc4c4c6e1a7d';
     console.log('movie service initialised');
     
  }

  getPopular(){
    //let today = new Date().toISOString().slice(0, 10);
    //console.log(today);
     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.descending&api_key=13e556517a6530f85508fc4c4c6e1a7d')
     .map(res => 
       res.json());
  }

  getInTheater(){
    //curret date in yyyy-mm-dd format
    
    let today = new Date().toISOString().slice(0, 10);

    //2 months older date
    let bd = new Date();
    bd.setMonth(bd.getMonth()-2);
    let old_Date = bd.toISOString().slice(0,10);
    console.log(old_Date);
     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte='+old_Date+'&primary_release_date.lte='+today+'&api_key=13e556517a6530f85508fc4c4c6e1a7d')
     .map(res => 
       res.json());
  }

  searchMovies(searchStr:string){

    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.descending&api_key='+this.apiKey)
    .map(res =>
      res.json());
  }


  getMovie(id){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
    .map(res => 
    res.json());
  }


}
