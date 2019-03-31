import { Component, OnInit } from '@angular/core';
import { User } from '../github-classes/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
