import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { USER } from '../../../assets/mocks/profile';
import { Cuisine } from '../../models/cuisine.model';

@Injectable()
export class UserService {
  public user: User;

  getUser(): void {
    this.user = USER;
  }

  updateUserPreferences(cuisine: Cuisine): void {
    this.user.preferences.push(cuisine);
  }
}
