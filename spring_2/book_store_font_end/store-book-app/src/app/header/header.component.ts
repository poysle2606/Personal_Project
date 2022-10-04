import {Component, OnInit} from '@angular/core';
import {HomeService} from '../service/home.service';
import {Category} from '../model/category';
import {TokenStorageService} from '../service/toke-strorage.service';
import {ShareService} from '../service/share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listCategory: Category[] = [];
  username: string;
  currentUser: string;
  role: string;
  isLoggedIn: boolean;
  constructor(private homeService: HomeService,
              private tokenStorageService: TokenStorageService,
              private shareService: ShareService) {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
  }

  ngOnInit(): void {
    this.getCategory();
    this.loadHeader();
  }

  getCategory() {
    this.homeService.getCategory().subscribe((category: any) => {
      this.listCategory = category.content;
      console.log(category);
    });
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
    }
    this.isLoggedIn = this.username != null;
  }

  logOut() {
    this.tokenStorageService.signOut();
  }
}
