import { Component, OnInit } from '@angular/core';
import { User } from '../github-classes/user';
import { GithubRequestService } from '../github-services/github-request.service';
import { Repo } from '../github-classes/repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [GithubRequestService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private username:string;
  user:User;
  repo:Repo;
  users = [];
  repositories = [];
  usernameSearch="EstherMuigai";
  constructor(private githubService:GithubRequestService) { }

  ngOnInit() {
    this.githubService.userProfileRequest(this.usernameSearch)
    this.user=this.githubService.user;
    this.users=[];
    this.users.push(this.user);
    this.githubService.repoRequest(this.usernameSearch);
    this.repositories = [];
    this.repositories = this.githubService.repositories;
  }

}
