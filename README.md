# Assignment: Data Driven Website
This assessment consists in a web site that is created from data which is provided by a JavaScript code that has a complex data structure and it is displayed in a website. It uses templates to display the data. The data is some creative commons material taken from wikipedia about different animals.

The structure of the data is as follows:

* A file called ``AnimalsData.js`` which contains a single variable called ``animals_data``.
* The ``animals_data`` variable is an object that contains an array called ``category``. Each element in the array represents a class of animals (reptiles, mammals, birds).
* The ``category`` array contais the followings variables:
  * The string ``name``
  * Another array called ``animals`` which contains objects representing species of animal. Each object has the following member variables:
    * ``name``: the name of the species.
    * ``description``: a textual description of the species.
    * ``image1``: an image of an example of the species.
    * ``image2``: a second, alternative, image.

This assignment consists on:
* A HTML file containing the structures of the page, including templates designed to display the data.
* A JavaScript file that maps the data onto the templates and provides interactivity.
* A CSS file that styles the website.
