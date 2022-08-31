import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasedataService {
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
}
