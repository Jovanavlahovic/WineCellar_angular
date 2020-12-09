import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wine } from '../model/wine.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() wines: Wine[];
  @Output() deletedWine: EventEmitter<number> = new EventEmitter();
  @Output() parameters: EventEmitter<Object> = new EventEmitter();
  
  

  constructor() {}

  ngOnInit(): void {}

  deleteWine(id: number) {
    this.deletedWine.emit(id);
  }

  sendParams(param: string){
    this.parameters.emit(param);
  }
}
