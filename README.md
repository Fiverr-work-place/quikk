# QUIKK API

## Table of Content
  * How to run this Project
  * Project Structure 
  * Details of `app` folder
  * What's inside a component


## How to run this Project


Install all packages for this project (Only for the first time run this command)
```cmd
  npm install  
```

Run The Project. It will open the project in your default browser.
```
  ng serve --open
````


## Project Structure 
  The main project code is inside the `src` folder
  
      `app` - contains all the front-end code.
      `assets` - contains all raw file (ex: image).
      `environments` - contains project environment related  codes.
      
We will mainly focus on the `app` folder.

## Details of `app` folder

In side the app folder we have all those custom components. Each of those folders is a component which we are calling from `app.component.ts`. 

To create a new component use: 

```
  ng g c <component-name>
```
* To show the new component import it in the `app.component.ts` file. 

Currently, we have different components for each of those section which is available in the home page. 

## What's inside a component
  There are 4 file inside a compoent folder 
  
    `component.css` - contains all CSS code for that component only 
    `component.html` - contains the HTML code for that component 
    `component.spec.ts` - we can write testing code (unit testing) code in this file
    `component.ts` -  this is the module file which connect it as a angular compoent 

Based on your need you can change all those file. For CSS modify that `.css` file and for html structure modify the `.html` file.







