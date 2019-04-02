import { Component, OnInit } from '@angular/core';
import { User } from '../github-classes/user';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { GithubRequestService } from '../github-services/github-request.service';
import { Repo } from '../github-classes/repo';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers: [GithubRequestService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  private username:string;
  private trending:any;
  user:User;
  repo:Repo;
  users = [];
  repositories = [];
  usernameSearch="";

  submitSearch(){
    this.usernameSearch=this.username;
    this.githubService.userProfileRequest(this.usernameSearch)
    this.user=this.githubService.user;
    this.users=[];
    this.users.push(this.user);
    this.githubService.repoRequest(this.usernameSearch);
    this.repositories = [];
    this.repositories = this.githubService.repositories;
  }
  
  constructor(private githubService:GithubRequestService,private http:HttpClient) {}

  ngOnInit() {
    interface ApiResponse{
      name:string;
      avatar:string;
      url:string;
  }
    this.http.get<ApiResponse>("https://github-trending-api.now.sh/developers").subscribe(response=>{
      
    })
  }
}
