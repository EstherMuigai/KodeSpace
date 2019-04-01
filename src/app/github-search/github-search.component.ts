import { Component, OnInit } from '@angular/core';
import { User } from '../github-classes/user';
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
  
  constructor(private githubService:GithubRequestService) {}

  ngOnInit() {}
}
