import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubSearchComponent } from './github-search/github-search.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes=[
  {path:"home",component:GithubSearchComponent},
  {path:"profile",component:ProfileComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/profile",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
