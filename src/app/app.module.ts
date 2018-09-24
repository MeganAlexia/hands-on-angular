import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: '**',
        redirectTo: ''
      }]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
