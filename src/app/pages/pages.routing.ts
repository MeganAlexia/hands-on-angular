import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent
  }
]
