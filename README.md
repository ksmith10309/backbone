![CF](http://i.imgur.com/7v5ASc8.png) JS Framework Comparative Analysis
=======================================================================

## BACKBONE.JS

### Research Conducted By: Katherine Smith & Sara Bahrini

### Overall Score and Comments
#### Score (Out of 10): 6
#### General Comments
* Backbone is a lightweight JavaScript library. It only provides the bare minimum of a framework. If the developer needs any more features, they would have to build it.

* It is loosely based on the Model-View-Controller design pattern, but it does not have the Controller element. However, it does support RESTful APIS so models in Backbone can be tied to a back-end. 

* It is used for developing single-page web applications and client-side applications that run in a web browser. When handling the DOM, Backbone adopts an imperative programming style.

#### Pros
* Lightweight
* Flexible
* Extensible

#### Cons
* Can be challenging to choose extensions
* Can require a lot of code with extensions

### Ratings and Reviews
#### Documentation
* The documentation was lengthy and went into detail about what models and views are. It then went over collections, API integration, view rendering, and routing with URLs. After that, it went over all the different Backbone events, all the different methods on the Backbone model, all the different methods on the Backbone collection, and all the different methods on the Backbone router.

* Overall, the documentation was not very helpful in getting started. The best resource for getting started was a tutorial by Artur Adib called Hello Backbone.js. It goes over five different Backbone examples with increasing complexity.

#### Systems Requirements
* Backbone's only hard dependency is Underscore.js. For RESTful persistence and DOM manipulation with Backbone.View, it also has a dependency on jQuery and json2.js for older Internet Explorer support.

#### Ramp-Up Projections
* For a team of mid-junior developers, it would take about a week to become productive with Backbone. To use Backbone, developers should know jQuery and have an understanding of DOM manipulation.

#### Community Support and Adoption levels
* Backbone was developed by Jeremy Ashkenas and was initially released on October 13th, 2010. Jeremy Ashkenas also developed Underscore.js and CoffeeScript.

* Websites and web apps that were developed using Backbone include Airbnb, Hulu, Trello, Foursquare, Pandora, USA Today, Bitbucket, SoundCloud, Basecamp, and Countly.

* However, Backbone is declining in popularity. It is now mainly used in legacy code. 

### Links and Resources
* [docs](http://backbonejs.org/)
* [examples/tutorials](https://jasongiedymin.github.io/hello-backbonejs/)
* [trends](https://trends.google.com/trends/explore?date=all&q=backbone%20javascript)

### Code Demos
* [live/running application](https://ksmith10309.github.io/backbone/index.html)
* [code repository](https://github.com/ksmith10309/backbone)

### Operating Instructions
* Clone backbone repository
* Ensure node.js is installed
  * If not, run the command `brew install node` in the terminal
* Ensure live-server is installed
  * If not, run the command `npm install -g live-server` in the terminal
* Navigate to the repository and run the command `live-server`