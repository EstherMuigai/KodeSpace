import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { User } from '../github-classes/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:User;

  constructor(private http:HttpClient) {
    this.user = new User ("","");
  }
  userProfileRequest(jina){

    interface ApiResponse{
        name:string;
        avatarUrl:string

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>(environment.apiUrl+environment.user+jina+environment.accesstoken).toPromise().then(response=>{
            
            this.user.name=response.name
            this.user.avatarUrl=response.avatarUrl

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
  
}
