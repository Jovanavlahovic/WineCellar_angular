import { Component, OnInit } from '@angular/core';
import { Wine } from '../model/wine.model';
import { WineList } from '../model/wineList.model';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wineList: Wine[];
  count: number;

  params = {
    sort: '',
    filter: {
      name: '',
    },
    pageSize: 4,
    page: 1
  };

  constructor(private service: WineService) {}

  ngOnInit(): void {
    this.getWines();
  }

  getWines(): void {
    this.service.getWines(this.params).subscribe((x) => {
      this.wineList = x.results;
      this.count = x.count;
    });
  }

  wineToDelete(id: number) {
    this.service.delete(id).subscribe((x) => {
      this.getWines();
    });
  }

  setSortParams(param):void{
    this.params.sort = param;
    this.getWines();
    
  }

  getFilterParams(filterParams): void{
    this.params.filter.name = filterParams;
    this.getWines();
  }

  
  getActivePage(param): void{
    this.params.page = param;
    this.getWines();
  }
}
