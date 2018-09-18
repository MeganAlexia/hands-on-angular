import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { USER } from '../../../assets/mocks/profile';
import { ZOMATO_URL } from '../../job.constant';
import { HttpService } from '../../core/services/http.service';

@Injectable()
export class ProfileService {
  cuisinesAvailable = null;

  constructor(private httpService: HttpService) {}

  getUser(): User {
    return USER;
  }

  fetchCuisines(city_id: number): void {
    this.httpService.get(ZOMATO_URL + 'cuisines', {'city_id': city_id})
        .subscribe(
          res => {
            this.cuisinesAvailable = res.cuisines;
          },
          error => console.log('error ', error)
        );
  }

}

