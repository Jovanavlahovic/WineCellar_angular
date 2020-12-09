import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  numOfWines: number;
  winesPerPage: number = 4;
  numbOfPages: number;
  pageNumbers: any[];
  activePage: number = 1;
  @Output() sendPage: EventEmitter<number> = new EventEmitter();

  constructor(private service: WineService) {}

  ngOnInit(): void {
   this.getPages();
    
  }

  getPages(){
    this.service.getWines({}).subscribe((x) => {
      this.numOfWines = x.count;
      this.numbOfPages = Math.ceil(this.numOfWines / this.winesPerPage);
       this.pageNumbers = [];

      console.log(this.numbOfPages);
       for (var i = 1; i <= this.numbOfPages; i++) {
         this.pageNumbers.push(i);
       
       }
    });
  }

  pageSelected(numb:number):void{
    this.activePage= numb;
    this.sendPage.emit(numb);
  }
}
