# Restaurant Reviews Project

This is the sixth required project on the [Udacity Front End Nanodegree](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001).

The goal of this project was to convert a static webpage into a mobile-ready web application. At first the website was not prepared to work on mobile devices (lists were too long, information shown was too big for small screens, etc.). 

The development has been focused on converting the design to be responsive on different sized displays. In order to do, so a **mobile-first** approach has been followed. Flexbox grids are used to accomplish a flexible and adaptive design no matter the screen size.

Afterwards, I focused on improving user offline experience, by using a basic service worker with cache, and implementing standard accessibility features.

## What is it

Restaurant reviews is a simple web application that shows a list of available restaurants in an area. All restaurants are geolocated within a map and they can be filtered by neighborhood and/or cuisine.

When entering in a restaurant ("View details" button) additional information is shown, such as: time schedule and customer reviews.

## How to run

This project requires [Python](https://www.python.org/) to be installed on your machine.

1. Download [⬇](https://github.com/BycorSanchez/restaurant-reviews/archive/master.zip) or clone this repository.
2. Launch server. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000`. For Python 3.x, you can use `python3 -m http.server 8000`.
3. Visit `http://localhost:8000`.

## Technologies used

* ES6 JavaScript
* [Leaflet.js](https://leafletjs.com/)
* [Mapbox](https://www.mapbox.com/)
* Flexbox
* Service worker
* Cache API
* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) (add CSS vendor prefixes)
* [gulp-image-resize](https://github.com/scalableminds/gulp-image-resize) (reduce images size)
 
### Notes

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.