import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { TruncateTextDirective } from './truncate-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    LoginComponent,
    AboutComponent,
    NotFoundComponent,
    ProfileComponent,
    TruncateTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
