# cypress-OurRagingPlanet

it is a test program which is running with Visual Studio Code and cypress
## need to install:
Github ->to push up

Visual Studio Code

**components:** nodejs, npm, (sudo npm install -g) @vue/cli

## Websites with informations:
[official cypress website](https://www.cypress.io/)

[example for tests](https://medium.com/geoman-blog/testing-maps-e2e-with-cypress-ba9e5d903b2b)

**answer/question for issue**

[stackoverflow](https://stackoverflow.com/)

[Github](https://github.com/)


**look in**

**/leaflet.pm-develop package.json** ->to see the dependencies & commands

**/leaflet.pm-develop/cypress/support index.js** ->is a "before each" loop
>meaning is this loop is running before each testing sequence (you can change it for your own testing;for example, i did everywhere a commanding except the Website, see Github index.js)
## deleting the test files from the example
**/leaflet.pm-develop/cypress/integration testfile.js**

**create a new test file**
## run test
**npm run cypress** ->test runs on cypress(gui)

**npm run test** ->test runs on terminal
**in npm-debug.log -> you will find the errors**

**/leaflet.pm-develop/cypress/screenshots ->you will find screenshots from error**

# TEST
I'm testing features on this website  https://orp.ev.openindustry.in/#/s/ee5b6ff3-5d4e-4da1-b399-96432e145f66

I did the test site by site, you have at the left hand side 5 buttons(my 5 tests) and an extra test for the Login Page
