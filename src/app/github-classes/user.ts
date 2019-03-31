export class User {
    constructor(public name:string,
                public login:string, 
                public email:string, 
                public avatarUrl:string,
                public company:string,
                public html_url:string,
                public public_repos:number,
                public followers:number,
                public following:number){}
}