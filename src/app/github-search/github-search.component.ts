import { Component, OnInit } from '@angular/core';
import { User } from '../github-classes/user';
import { GithubRequestService } from '../github-services/github-request.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user:User;
  constructor(private githubService:GithubRequestService) { }

  ngOnInit() {
    this.githubService.userProfileRequest("EstherMuigai")
    this.user=this.githubService.user
  }
}
