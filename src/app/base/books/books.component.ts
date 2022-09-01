import { Component, OnInit } from '@angular/core';
import { BasedataService } from '../basedata.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  booklist: any;
  filterCategory: any;
  searchKey: any = '';

  constructor(private baseService: BasedataService) {}

  ngOnInit(): void {
    this.baseService.viewAllbooks().subscribe((data) => {
      this.booklist = data;
      this.filterCategory = data;
    });

    this.baseService.search.subscribe((value: any) => {
      this.searchKey = value;
    });
  }

  filter(categoryid: any) {
    this.filterCategory = this.booklist.filter((item: any) => {
      if (item.category == categoryid || categoryid == '') {
        return item;
      }
    });
  }
}
