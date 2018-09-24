import { Injectable } from '@angular/core';
import { ZOMATO_URL } from '../../job.constant';
import { HttpService } from '../../core/services/http.service';
import { Cuisine } from '../../models/cuisine.model';

@Injectable()
export class ProfileService {
  cuisinesAvailable: Cuisine[] = null;

  constructor(private httpService: HttpService) {}

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

