import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
	url:string="";
	searchString:string="";
  	constructor(public http:Http) {
  		console.log("Service initialized");
	}
	setMovieName(movieName){
		this.searchString = movieName;
		this.url="https://www.omdbapi.com/?t="+this.searchString+"&apikey=316b39eb";
	}
	searchMovies(){
		// this.url="https://www.omdbapi.com/?t="+this.searchString+"&apikey=316b39eb";
		return this.http.get(this.url)
			.pipe(map(res=>res.json()));
	}
	setUrl(){
		return this.url;
	}
}