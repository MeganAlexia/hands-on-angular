import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatCardModule,
    MatToolbarModule,
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
