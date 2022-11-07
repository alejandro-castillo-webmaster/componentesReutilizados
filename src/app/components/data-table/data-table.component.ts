import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilmsResponse } from 'src/app/interfaces/films';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  @Input() dataFilms: FilmsResponse[] = [];
  @Output() newItemEvent = new EventEmitter<string>();


  constructor() {
   }

  navigateFilm(url: any | string) {
    this.newItemEvent.emit(url);
  }

}
