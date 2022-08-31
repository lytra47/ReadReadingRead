import { Component, OnInit } from '@angular/core';
import { BasedataService } from '../basedata.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  booklist: any;

  constructor(private baseService: BasedataService) {}

  ngOnInit(): void {
    this.baseService.viewAllbooks().subscribe((data) => {
      this.booklist = data;
    });
  }
}
