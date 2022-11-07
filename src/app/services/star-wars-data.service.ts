import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FilmsResponse } from '../interfaces/films';
import { FilmResponse } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class StarWarsDataService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dataFilms() {
    return this.http.get<FilmsResponse[]>(this.apiUrl + 'films')
      .pipe(
        map((data: any) => {
          return data['results'];
        })
      );
  }

  dataFilm(id: string) {
    return this.http.get<FilmResponse>(`${this.apiUrl}films/${id}`);
  }

}
