# KodeSpace
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5. It incorporates lessons learnt in creating Angular applications especially on Typescipt looping functions, using the HttpClient and Routing Modules. The project was uploaded on 02/04/2019.

| Behaviour                       | Input Example                    | Output Example  				                 |
| ------------------------------- |:--------------------------------:| --------------------------------------: |
| 			                          | 			                           | 						 		                         |
| GIVEN user is on the site page  | WHEN they refresh page	         | THEN a they have a view of my profile                            |
| 			                          | 			                           | 						 		                         |
| GIVEN user navigates navbar 	| WHEN they click home         | THEN they are redirected to the Github search component                        |
| 			          | 			             | 						 		 | 
| GIVEN user navigates navbar       | WHEN they click profile    | THEN they are redirected to my Profile                  |
| 			          | 			             | 						 		 |
| GIVEN user navigates navbar        | WHEN they click on about us          | THEN they are redirected to the about us  component                        | 
| 			          | 			             | 						 		 |
| GIVEN user is on my profile       | WHEN they refresh            | THEN they should have a view of my most recent details on github				 |
| 			          | 			             | 						 		 || 			                          | 			                           | 						 		                         |
| GIVEN user is on the home page| WHEN they refresh page	         | THEN a they have a view of a search bar and a list of trending github profiles in real time                            || 			                          | 			                           | 						 		                         |
| GIVEN user inputs a valid Github username  | WHEN they click submit         | THEN a they have a view of said username'smost recent details on Github                            |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

1. Ran `ng test` on the Angular CLI on `Karma v4.0.1`  and `Jasmine 2.99.0`. 
2. A class that was to be used publicly had been given a private scope.
3. Changed scope to public
4. Ran `ng test` again 
5. Application passed all tests

## Deployment on Github
On the angular CLI terminal:
*step 1:  Create a new repository on Github profile.Follow steps documented on this site:
`https://help.github.com/en/articles/create-a-repo`
*step 2:  We add the remote URL to this repository by running this command:
`git remote add origin "TheURLToTheRepoCreated"`
*NB: Using a custom name in place of origin will bring errors. For this deployment, strictly use origin.*
*step 3:  Install the CLI tool that will help us deploy our application by running this command: 
`npm i -g angular-cli-ghpages`
*step 4: Create a dist/ folder in our application’s root folder by running this command:
`ng build --prod --base-href="https://InsertGithubUsername.github.io/InsertNameOfRepoCreatedAbove/"`
*step 5: Next, we go to our gitignore folder in the text editor and remove the dist/ line.
*step 6: Add,commit and push all changes.
*step 7: Now we can run the following command to deploy to ghpages:
`sudo npx ngh --dir=dist/project-name`
*NB: The project-name should be the name of your project in your local computer*
*step 8: If you encounter errors run the following command:
`sudo npx ngh --no-silent --dir=dist/project-name`
i. If the error has to do with the remote name:
   Add the remote as origin,
   Remove the custom remote.
ii. If the error has to do with ghpages:
    Confirm that you used the correct project-name as is in your local computer
iii. For any other errors,search for solution on Github Forums
*step 9: If successful you can run your project from ghpages using the base link you provided in step 4.

## Find license here
https://github.com/EstherMuigai/quotes-app/blob/master/LICENSE
