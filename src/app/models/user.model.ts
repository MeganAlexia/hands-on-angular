import { Cuisine } from './cuisine.model';

export class User {
  firstName: string;
  lastName: string;
  title: string;
  location: {
    city: string;
    "city_id": number;
  };
  phone: string;
  email: string;
  picture: string;
  preferences: Cuisine[];
}
