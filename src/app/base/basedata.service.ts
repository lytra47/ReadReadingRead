import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasedataService {
  search = new BehaviorSubject('');
  constructor(private httpClient: HttpClient) {}

  //api View all books
  viewAllbooks() {
    const baseURL = 'http://localhost:3000/books/';
    return this.httpClient.get(baseURL);
  }

  //api View all authors
  viewAllauthors() {
    const baseURL = 'http://localhost:3000/authors/';
    return this.httpClient.get(baseURL);
  }

  //api to get single book page.
  viewBook(bookId: any) {
    const baseURL = 'http://localhost:3000/books/' + bookId;
    return this.httpClient.get(baseURL);
  }

  //api to get single author page.
  viewAuth(authId: any) {
    const baseURL = 'http://localhost:3000/authors/' + authId;
    return this.httpClient.get(baseURL);
  }
}
