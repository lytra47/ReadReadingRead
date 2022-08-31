import { Component, OnInit } from '@angular/core';
import { BasedataService } from '../basedata.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  authorlist: any;
  constructor(private baseService: BasedataService) {}

  ngOnInit(): void {
    this.baseService.viewAllauthors().subscribe((data) => {
      this.authorlist = data;
      console.log(data);
    });
  }
}
