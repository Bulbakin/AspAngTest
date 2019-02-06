import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  addBook_form: FormGroup;

  constructor(private data: DataService, formBuilder: FormBuilder) {
    this.addBook_form = formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.data.addBook(this.addBook_form.value)
      .subscribe(book => { console.log(book); this.data.getBooks(); })
  }

}
