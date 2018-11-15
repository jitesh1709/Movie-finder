import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { map } from 'rxjs/operators';
import { MovieResultComponent } from '../movie-result/movie-result.component';

@Component({
	providers:[MovieResultComponent],
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchString:string="";
movieTitle:string="";releaseDate:string="";country:string="";moviePoster:string="";movieActors:string=""; 
  constructor(public searchService:SearchService,public http:Http,public router:Router,public movieList:MovieResultComponent) { }
  getMovies(){
  	this.searchService.setMovieName(this.searchString);
  	// this.movieList.listMovies();
  	this.router.navigate(['movie-result']);
  	// this.searchService.searchMovies()
  	// 	.subscribe(result=>{
  	// 		this.country = result.Country;
  	// 		this.movieTitle = result.Title;
			// this.releaseDate = result.Released;
			// this.moviePoster = result.Poster;
			// this.movieActors = result.Actors;
  	// 	})
  }
  ngOnInit() {
  }

}
