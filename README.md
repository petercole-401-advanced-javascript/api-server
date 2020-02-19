<!-- # LAB - Class 07 -->
# Simple API
__Version 1.0.0__

<!-- ## Project Name -->

### Author: Peter Cole

### Links and Resources

- [Submission PR](https://github.com/petercole-401-advanced-javascript/api-server/pull/1)
<!-- - [Swagger Docs]() -->
- [ci/cd](../master/.github/workflows/nodejs.yml) (GitHub Actions)
<!-- - [Back-end Server URL](http://xyz.com) (when applicable) -->
<!-- - [Front-end Application](http://xyz.com) (when applicable) -->

### Setup

#### `.env` requirements (where applicable)

- `PORT=3000` (local with json-server)
<!-- - `MONGODB_URI` - URL to the running mongo instance/db -->

#### How to initialize/run your application (where applicable)

- `npm start`

#### Tests

- How do you run tests?
  - Using `npm test server.test.js`
<!-- - Any tests of note?
  - Functional server and category additions -->
<!-- - Describe any tests that you did not complete, skipped, etc
  - ... -->

#### UML
<!-- Link to an image of the UML for your application and response to events -->
- ![UML](../master/assets/api-server-dev1-UML.jpg)

<!-- TASK LIST FOR DAY 7 
Create an express server, using 2 files
  - index.js should require lib/server.js and receive an object with a start() method
    - It should call the .start() method with the correct port
  - lib/server.js should contain all of the logic for the server (essentially all of the code)

  - Import the in-memory data models you created in the previous module (Lab 04)

  - Create CRUD routes to handle requests for both “categories” and “products”
    - app.get('/products', (req, res) => {}) (and app.post(), app.put(), app.delete())
    - app.get('/categories', (req, res) => {}) (and app.post(), app.put(), app.delete())
    - Which methods in your model should each of these route methods call?
    - Once you’ve required the models, how do you call those methods? Where is the data coming from? 
-->
