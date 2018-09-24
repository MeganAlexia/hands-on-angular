import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { UserService } from '../../core/services/user.service';
import { Cuisine } from '../../models/cuisine.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private locationId: number;
  private preferences: Cuisine[];

  constructor(private homeService: HomeService,
              private userService: UserService) {}

  ngOnInit() {
    this.getUserInfos();
    this.homeService.fetchRestaurants(this.locationId, this.preferences);
  }

  private getUserInfos(): void {
    const user = this.userService.user;
    this.locationId = user.location.city_id;
    this.preferences = user.preferences;
  }

}
