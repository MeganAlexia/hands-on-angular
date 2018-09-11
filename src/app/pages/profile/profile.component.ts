import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.user = this.profileService.getUser();
    this.profileService.fetchCuisines(this.user.location.city_id);
  }

  

}
