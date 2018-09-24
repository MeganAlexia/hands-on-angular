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

import {
  MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatListModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
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
