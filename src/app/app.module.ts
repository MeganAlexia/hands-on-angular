import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: '**',
        redirectTo: ''
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
