#Twitterstats
This is a personal project space to showcase my views on what a scalable Angular JS SPA architecture could look like, along with a bit of D3 and Sigma graph integration for good measure. 

The app can be viewed at [http://glendaviesnz.github.io/twitterstats/](http://glendaviesnz.github.io/twitterstats/). While the authentication module with oauth login via google is in place it is currently disabled, so the 'Login with Google' button actually just logs you straight in.

This is not intended to be 'yet another' Angular boilerplate/seed project - it is a personal demo site only.

A big thanks to [John Papa](https://twitter.com/John_Papa) and [Todd Motto](https://twitter.com/toddmotto) for sharing their opinions on Angular app architecture, which has influenced this setup.

##Setup

The project is based on the [ngbp](https://github.com/ngbp) Angular boilerplate project with the following modifications:

* Added grunt-watch and configured it to add an [IIFE](http://caughtexceptions.blogspot.co.nz/2014/07/angular-module-setup.html) around each module in order to provide better encapsulation
* Added Protractor for end to end testing and set config to run .scenario.js files in module directories
* Split the main layout from the index.html file into a layout module to allow for easier control of menu setup, etc.

##Components

As well as the default components that come with ngbp - font-awesome, Twitter bootstrap, etc. - also added are:

* D3
* NVD3 
* Angular-nvd3-directives
* Sigma.js 

All except Sigma.js were added via Bower. There are no existing Sigma.js directives that I could find, so a simple sigma directive was created. Thanks to the magic of javascript closures it was possible to push the directives isolated scope into the sigma.js onClick binding, which then allowed the node click event to update the Angular model data binding - [more details about this on my blog](http://caughtexceptions.blogspot.co.nz/2014/07/getting-angular-scope-variable-into.html).

Currently data for the D3 and Sigma graphs is coming from a bogus Angular data service - obviously in a real app it would be coming from a REST API service. 

##Workflow

Grunt watch is set up to copy any changed files to the build directory on changes, compiles all LESS files, as well as running jshint and all unit tests via the Karma test runner. 

The unit test and scenario tests files are obviously very basic at this stage as not a lot to test.

To build the production version 'grunt compile' can be run which compiles all javascript files into a single file and minifies.

##To Do

* Finish Sigma directive to make it completely modular with ability to pass in configuration so it can potentially be released as an open source module
* Investigate replacing the Grunt workflow automation with Gulp
* ~~Setup up unit and end to end testing properly~~
* ~~Fix bootstrap responsive dropdown menu - currently broken when resizing to mobile size~~
* Get D3 graphs to resize slightly when at mobile width
* ~~Fix issue with dashboard graphs not displaying on first load if returning to an already logged in sessions~~

 