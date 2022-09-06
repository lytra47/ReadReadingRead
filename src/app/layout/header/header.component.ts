import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasedataService } from 'src/app/base/basedata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm: any;
  constructor(private baseService: BasedataService, private router: Router) {}

  ngOnInit(): void {}

  search(event: any) {
    this.searchTerm = event.target.value;
    this.baseService.search.next(this.searchTerm);
  }

  searchbtn(): void {
    this.router.navigateByUrl('home/books');
  }
}
