import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './pages.routing';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { HomeService } from './home/home.service';
import { ProfileService } from './profile/profile.service';

import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileComponent,
    HomeComponent,
    MessagesComponent,
    NotFoundComponent
  ],
  providers: [
    HomeService,
    ProfileService
  ]
})
export class PagesModule { }
