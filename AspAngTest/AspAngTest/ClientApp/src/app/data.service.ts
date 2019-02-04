import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _url: string = "/api/sampledata/getbooks";
  private _url2: string = "/api/sampledata/addbook";

  constructor(private http: HttpClient) {}

  firstClick() {
    return console.log('clicked');
  }

  getBooks() {
    return this.http.get(this._url);
  }

  addBook() {
    return this.http.get(this._url2);
  }

}
