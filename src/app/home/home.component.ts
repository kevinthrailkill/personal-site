import { Component, OnInit } from '@angular/core';
import { Home } from '../custom-classes/home';

import { HomeService } from '../app-services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: Home

  constructor(private homeService: HomeService) { }

  getHomePage(): void {
    this.home = this.homeService.getHomePage();
    console.log(this.home);
  }

  ngOnInit() {
    this.getHomePage();
  }

}
