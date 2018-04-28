#  Burger
<img width="1277" alt="screen shot 2017-02-03 at 12 08 19 am" src="https://cloud.githubusercontent.com/assets/20719058/22581414/5c7ca398-e9a5-11e6-82fd-437296eb8d4e.png">

Tummy Burger is a fun little restaurant app that lets users input the names of burgers they'd like to eat, and then the best part....devour them! (yum)

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
* The app will store every burger in a database, whether devoured or not.



This app was made using Sequelize as the ORM to simplify the database interactions.

---

### Pre-requisites

* Install Node.js. visit https://nodejs.org/en/ and download

### Technologies used

*node.js
*Express.js


### Getting Started
This app is built with anf made possible with the following npm packages:
* express
* body-parser
* sequelize
* path
* method-override

Type `npm install` in command line to install all the dependcies located within package.json

In order to connect to the Tummy Burger Sequelized app server, type the following in the command line:

 `node server.js`

By visiting http://localhost:PORT (in this project, the PORT is either the one available in the Node environment or 3000), one is directed to this web app after connecting to the server.


### Author
* [Ejike Onwe](https://github.com/reyhenry38)

### License
This project is licensed under the MIT [License](https://github.com/reyhenry38/burger/blob/master/LICENSE.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  



