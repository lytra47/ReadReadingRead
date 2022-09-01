import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasedataService } from '../basedata.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss'],
})
export class ViewBookComponent implements OnInit {
  bookId: any;
  bookData: any;
  constructor(
    private baseService: BasedataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.bookId = data['id'];
    });
    this.baseService.viewBook(this.bookId).subscribe((item: any) => {
      this.bookData = item;
    });
  }
}
