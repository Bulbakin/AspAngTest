import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBooks } from './Books';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/edge';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseurl: string = "/api/sampledata";

  constructor(private http: HttpClient) {}

  firstClick() {
    return console.log('clicked');
  }

  getBooks() {
    return this.http.get(this.baseurl + "/getbooks");
  }

  addBook(book): Observable<IBooks> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };

    return this.http.post(
      this.baseurl + "/addBook", book, options)
      .pipe(map((res: Response) => res.json()));
  }

}
