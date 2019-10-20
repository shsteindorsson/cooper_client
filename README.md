# The Cooper Challenge
### Author  
[Clarissa Liljander](https://github.com/clalil)  
[Sverrir Steindorsson](https://github.com/shsteindorsson)
## Built with  
**Front End:** React v.16.10.2, Semantic UI, CSS  
**Back End:** Rails 5.2.3   
**Testing frameworks:** Cypress, Jest, Enzyme  
**Deployed at:** [![Netlify Status](https://api.netlify.com/api/v1/badges/1746feec-8243-480e-8a58-1bbc5c106f26/deploy-status)](https://app.netlify.com/sites/cooper-clarissa-sverrir/deploys)  and [Heroku](https://www.heroku.com/).

<img src="./src/img/readme.png" alt="Image of app" width="40%">

## The code   
This repository contains our solution to the client side of the Cooper Challenge. Our respective repositories for the Cooper API built in Rails can be found [here](https://github.com/clalil/Cooper-Challenge-API) and [here](https://github.com/shsteindorsson/cooper_api).

## Getting started
### Dependencies  
* Yarn
* React
* Enzyme
* Cypress 
* Semantic UI for React
* Axios
* Chart.js
* react-chartjs-2    

### Setup   
To test this application you need to fork it to your own GitHub account and clone it to your local workspace.  

To install all of the dependencies:    
```
$ yarn install
```  
To run the unit tests:  
```
$ yarn test
```  
To start cypress and run the feature tests:  
```
$ yarn run cy:open
```
To start the application and run it on your local host:
```
$ yarn start
```

### Exploring the app online or in local host [WIP]  

## Updates/Improvements  
Later on, we would like to:  
- Finish implementing the BMI calculator on the client side and add the save data functionality to it.  

## License  
This project is released under the [MIT-license](https://en.wikipedia.org/wiki/MIT_License).

### Acknowledgement  
Thank you [Craft Academy](https://craftacademy.se) for giving us this assignment.  

## Craft Academy's _Question of the week..._
In this project the calculation is performed on the client-side.  

### What are the pros and cons of client-side processing/calculation ?

#### Pros
- It makes scaling easier because computational load is not increased with each new user
  - only increases storage but does not increase computational load on server
  - hence, less server-cost

#### Cons
- client-side resources will be more of an issue
  - f.ex. hardware capabilities and software compatibility on client-side
- calculation can not be written in any language or framework without it affecting the client-side
- with server-side computation, more of the debugging is focused on a single target rather than, possibly, multiple client-side scenarios
- Security, some processing should never be done client-side (banking f.ex.)
