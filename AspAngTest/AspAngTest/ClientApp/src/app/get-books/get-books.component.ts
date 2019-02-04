import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IBooks } from '../Books';


@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {

  books: IBooks[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBooks().subscribe(data => { this.books = data as any });
  }
}
