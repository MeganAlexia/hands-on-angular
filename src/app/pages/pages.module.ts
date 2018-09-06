import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from './pages.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProfileComponent,
    HomeComponent,
    MessagesComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
