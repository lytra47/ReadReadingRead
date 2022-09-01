import { Component, OnInit } from '@angular/core';
import { BasedataService } from 'src/app/base/basedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm: any;
  constructor(private baseService: BasedataService) {}

  ngOnInit(): void {}

  search(event: any) {
    this.searchTerm = event.target.value;
    this.baseService.search.next(this.searchTerm);
  }
}
