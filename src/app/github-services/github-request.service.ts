import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { User } from '../github-classes/user';
import { Repo } from '../github-classes/repo';
import { Repos } from '../github-classes/repos';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:User;
  repo:Repo;
  repositories=Repos;
  refinedRepos=Repos;

  constructor(private http:HttpClient) {
    this.user = new User ("","","","","","",0,0,0);
    this.repo = new Repo ("","","");
    this.repositories = [];
    this.refinedRepos = [];
  }
  userProfileRequest(currSearch){

    interface ApiResponse{
        name:string;
        login:string;
        email:string;
        avatar_url:string;
        html_url:string;
        company:string;
        public_repos:number;
        followers:number;
        following:number;

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl+environment.user+currSearch+environment.accesstoken).toPromise().then(response=>{
            
            this.user.name=response.name
            this.user.avatarUrl=response.avatar_url
            this.user.login=response.login
            this.user.email=response.email
            this.user.html_url=response.html_url
            this.user.public_repos=response.public_repos
            this.user.company=response.company
            this.user.followers=response.followers
            this.user.following=response.following

            resolve()
        },
        error=>{
                this.user.name="User Not Found."
                reject(error)
            }
        )
    })
    return promise
  }

  repoRequest(currSearch){
    
    interface ApiResponse{
      length:number;
  }
      this.http.get(environment.apiUrl+environment.user+currSearch+environment.repositories+environment.accesstoken).toPromise().then(response=>{
        for(let i = 0; i<response.length; i++){
          this.repositories.push(new Repo(response[i].name,response[i].description,response[i].html_url))
        }
})
}

}
