import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Wine } from '../model/wine.model';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output() sendParams: EventEmitter<string> = new EventEmitter();

filterNames: string;
 
  constructor() { }

  ngOnInit(): void {
   
  }

  filterWines():void{
    this.sendParams.emit(this.filterNames);
  }

}
