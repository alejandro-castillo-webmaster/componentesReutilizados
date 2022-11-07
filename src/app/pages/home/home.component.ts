import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsResponse } from 'src/app/interfaces/films';
import { StarWarsDataService } from 'src/app/services/star-wars-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public dataFilmResponse: FilmsResponse[] = [];
  public filterPost: string = '';
  public showData: boolean = false;
  public isError: boolean = false;
  public showSpiner = true;

  constructor(private starWarsService: StarWarsDataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getInitialData();
  }

  getInitialData() {
    this.starWarsService
      .dataFilms()
      .subscribe(
        (dataFilms: FilmsResponse[]) => {
          this.dataFilmResponse = dataFilms;
          this.showSpiner = false;
          this.showData = true;
        },
        error => {
          this.showSpiner = false;
          this.showData = false;
          this.isError = true;
          console.warn(error);
        }
      );
  }

  navigateFilm(url?: any | string){
    let text = url?.split('/') || '';
    this.router.navigate([`/film/${text[5]}`]);
  }

}
