import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { ZOMATO_URL } from '../../job.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get(ZOMATO_URL + 'categories');
  }

}
