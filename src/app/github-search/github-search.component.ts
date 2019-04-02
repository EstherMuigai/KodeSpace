import { Component, OnInit } from '@angular/core';
import { User } from '../github-classes/user';
import { HttpClient } from '@angular/common/http';
import { Trending } from '../trending';
import { GithubRequestService } from '../github-services/github-request.service';
import { Repo } from '../github-classes/repo';
import { Router} from '@angular/router';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers: [GithubRequestService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  public username:string;
  user:User;
  repo:Repo;
  trend:Trending;
  users = [];
  trends = [];
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

  constructor(private githubService:GithubRequestService,private http:HttpClient, private router:Router) {}

  ngOnInit() {
    interface ApiResponse{
      name:string;
      avatar:string;
      url:string;
  }
    this.http.get<ApiResponse>("https://github-trending-api.now.sh/developers").subscribe(response=>{
      for(let i = 0; i<Object.keys(response).length; i++){
    this.trend = new Trending (response[i].name,response[i].avatar,response[i].url);
    this.trends.push(this.trend);
      }
  })
  }
}
