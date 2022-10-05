import {Component, HostListener, OnInit} from '@angular/core';
import {Book} from '../model/book';
import {HomeService} from '../service/home.service';
import {TokenStorageService} from '../service/toke-strorage.service';

declare  var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  literaryVn: Book[] = [];
  literaryNational: Book[] = [];
  literaryChildren: Book[] = [];
  cardClass = '';
  role: string;
  constructor(private literaryService: HomeService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getLiteraryVn();
    this.getLiteraryNational();
    this.getLiteraryChildren();
    this.auth();
  }

  getLiteraryVn() {
    this.literaryService.getLiteraryVn().subscribe((book: any) => {
      if (book != null) {
        this.literaryVn = book.content;
      }
    });
  }

  getAll() {
    this.literaryService.getAllLiteraryVn().subscribe((bookVn: any) => {
      if (bookVn != null) {
        this.literaryVn = bookVn.content;
      }
    });
  }

  getLiteraryNational() {
    this.literaryService.getLiteraryNational().subscribe((book: any) => {
      if (book != null) {
        this.literaryNational = book.content;
      }
    });
  }

  getAllNational() {
    this.literaryService.getAllLiteraryNational().subscribe((book: any) => {
      if (book != null) {
        this.literaryNational = book.content;
      }
    });
  }

  getLiteraryChildren() {
    this.literaryService.getLiteraryChildren().subscribe((book: any) => {
      if (book != null) {
        this.literaryChildren = book.content;
      }
    });
  }

  auth() {
    this.role = this.tokenStorageService.getUser().roles[0];
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   console.log(window.scrollY);
  //   if (event.offsetTop - window.scrollY < 350) {
  //       this.cardClass = 'active-slow';
  //     }
  // }
}
