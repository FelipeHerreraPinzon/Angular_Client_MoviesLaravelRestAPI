import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  public movie$: Promise<Movie> | undefined;

constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
)
{}

ngOnInit(): void {
  this.getMovie();
}

 getMovie = async() => {
    let routeParamId: string | number | null = this.activatedRoute.snapshot!.paramMap.get("id");
    if (routeParamId) {
      routeParamId = parseInt(routeParamId);
     this.movie$ = this.moviesService.getMovieById(routeParamId);
    }
 }


}
