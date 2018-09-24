import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { UserService } from '../../core/services/user.service';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  profileForm: FormGroup;

  constructor(private profileService: ProfileService,
              private userService: UserService,
              private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      cuisine: ['']
    });

    this.user = this.userService.user;

    this.profileService.fetchCuisines(this.user.location.city_id);
  }

  onSubmit() {
    const value = this.profileForm.value.cuisine;
    const alreadyInPreferences = this.user.preferences.includes(value);

    if (alreadyInPreferences || value === '') {
      return;
    }

    this.userService.updateUserPreferences(value);
  }

}
