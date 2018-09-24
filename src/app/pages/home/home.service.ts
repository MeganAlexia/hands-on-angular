import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { ZOMATO_URL } from '../../job.constant';
import { Cuisine } from '../../models/cuisine.model';

@Injectable()
export class HomeService {
  private restaurants: any;

  constructor(private httpService: HttpService) {}

  fetchRestaurants(location: number, preferences: Cuisine[]): void {
    this.httpService.get(ZOMATO_URL + 'search', this.constructPayload(location, preferences))
      .subscribe(
        res => {
          this.restaurants = res.restaurants;
          console.log('this restaurants ', this.restaurants[0]);
        },
        error => console.log('error ', error)
      );
  }

  private constructPayload(location: number, preferences: Cuisine[]): any {
    const entity_id = location;
    const entity_type = 'city';
    let cuisines = '';

    for (const preference of preferences) {
      cuisines = cuisines + (cuisines.length > 0 ? ',' : '') + preference.cuisine_id;
    }

    return {
      entity_id,
      entity_type,
      cuisines
    };
  }

}
