import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {HomeService} from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  literaryVn: Book[] = [];
  constructor(private literaryVnService: HomeService) { }

  ngOnInit(): void {
    this.getLiteraryVn();
  }

  getLiteraryVn() {
    this.literaryVnService.getLiteraryVn().subscribe((book: any) => {
      if (book != null) {
        this.literaryVn = book.content;
      }
    });
  }
}
