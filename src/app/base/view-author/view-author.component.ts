import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasedataService } from '../basedata.service';

@Component({
  selector: 'app-view-author',
  templateUrl: './view-author.component.html',
  styleUrls: ['./view-author.component.scss'],
})
export class ViewAuthorComponent implements OnInit {
  authId: any;
  authData: any;
  constructor(
    private baseService: BasedataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.authId = data['id'];
    });
    this.baseService.viewAuth(this.authId).subscribe((item: any) => {
      this.authData = item;
    });
  }
}
