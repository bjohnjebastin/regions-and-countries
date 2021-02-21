RegionsAndCountries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Styling guides

I have followed the style guide mentioned in https://angular.io/guide/styleguide
Followed the Single Responsibility Principle, the country service would focus on getting only the country details.

## CSS coding standards

I have followed the CSS/SCSS coding guidelines mentioned in https://docs.ckan.org/en/ckan-2.7.3/contributing/css.html

## Installation instructions

We can build an Azure pipeline and integrate with Git to implement Continuous Integration and Continuous Deployment

## How the application works

Run `ng serve --open` command to open the web application in the browser which displays two drop-down to begin with.
The first drop-down, labelled as `Region`, displays the list of regions by default. Choosing a region would initiate an API call to get the relevant countries available for this region and populates the second drop-down, labelled as `Country`.
The API call is triggered only once for each region and then stored in the state and used if required for further actions.
Selecting a country would display the name, capital, population, currencies and flag in a tabular format.

## What else I would have done
- Would have written more unit tests to cover all possible scenarios.
- Would have written end-to-end testing using Protractor to test the website from end user's perspective.
- Would have implemented proper error handling.
- Would have written comments explaining the code.
- Would have used service worker to implement PWA, so that the website will be cached and can work offline.
- Would have concentrated more on styling.
- Would have implemented Accessibility.
