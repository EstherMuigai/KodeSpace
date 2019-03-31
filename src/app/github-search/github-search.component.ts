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
  
  constructor(private githubService:GithubRequestService) {
    this.username="LizKimita";
  }

  ngOnInit() {
    this.githubService.userProfileRequest(this.username)
    this.user=this.githubService.user;
    this.users.push(this.user);
    this.githubService.repoRequest(this.username)
    this.repositories = this.githubService.repositories
  }
}
