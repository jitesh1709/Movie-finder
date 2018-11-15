import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';
// import { SearchComponent } from '../search/search.component';

@Component({
  // providers:[SearchComponent],
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.css']
})
export class MovieResultComponent implements OnInit {
	url:string="";
  error:string="";
  show:boolean=true;
  display:boolean=false;
	data1:string;data2:string;data3:string;data4:string;
	movies:Array<any>;
  constructor(public searchService:SearchService,public http:Http){}
	movieTitle:string="";releaseDate:string="";country:string="";moviePoster:string="";movieActors:string="";
  	ngOnInit(){
  		this.url=this.searchService.setUrl();
  		console.log(this.url);
  	  	this.searchService.searchMovies()
  			.subscribe(
          (result:any)=>{
            this.error = result.Error;
            // console.log(this.error.length);
    				this.movieTitle = result.Title;
            // alert(this.error);
            this.country = result.Country;
    				this.releaseDate = result.Released;
    				this.moviePoster = result.Poster;
    				this.movieActors = result.Actors;
            if (this.error=="undefined" && this.movieTitle==result.Title) {
              alert(this.error);
              this.show=true;
            }if(this.movieTitle=="undefined"){
              this.show=false;  
            }
            // if (this.movieTitle.length>0 && this.error == "undefined") {
            //   this.show=true;
            // }
  			  }
        )
  	}
}