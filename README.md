# typescript-express-rest-seed

A fairly opinionated starter project for build a REST API with Node/TypeScript/Express.

-----

### Seed Features

* 100% TypeScript with modules
* Watch Mode for development
* Full npm-based build system (no gulp/webpack/babel dependencies)
* Demonstrations use of TypeScript 2.0 Types
  * Both types from npm and project-level types for 3rd party libraries without @types available
* Works on OSX and Windows

### Application Features

* "Users" API route with (GET, POST, PATCH support)
* Model objects with validation
* REST errors that map to meaningful HTTP status codes
* Required/Optional Environment Variables with type checking
* Application logging
* Not coupled to a data store (uses a simple in-memory JS Map)

-----

## Customizing the Application

The actual business content available in this application fairly underwhelming, a simple `users` endpoint with the following actions available:

* `GET /api/users` - retrieves a list of all users
* `GET /api/users/<id>` - retrieves a single user
* `POST /api/users` - creates a user
* `PATCH /api/users/<id>` - updates a user (allows partial updates)
* `DELETE /api/users/<id>` - deletes a user

A postman project has been included at the base directory, to easily execute a few of the success and error cases of the API.

This project can be used a framework for your own by including your own **routes** and **data**.

#### Routes

A route is made up of a router and a controller, which both have base classes, `RestRouter` and `RestController`. The classes should cover the majority of the use cases for a REST API. These use cases include, but are not limited to:

* Serializing responses and errors
  * Using the correct HTTP status code
  * Sending the data is a consistent serialization format
* Handling errors
  * Sending validation failure messages
  * Catching unexpected errors

Take a look under `src/app/api/routes/users` to see the implementation for the `/api/users` endpoints.

#### Data (Models)

Data is a broader topic that is much harder to generalize, which is the main reason I kept the data layer so "light" in this application. As previously mentioned, this application uses a simple JavaScript Map as its data store (which doesn't have the data constraints you'd expect most data stores to have). Generally you'd expect this layer to provide you with:

* Functionality to describe/define your data model
* The ability to save this data, asynchronously
* Ideally, some form of validation

This implementation does meet those three requirements - but please consider filling this section in with your favorite persistence layer (Mongoose, Sequelize, etc).

-----

### Quick Start

```sh
# clone the report
git clone https://github.com/giannico/typescript-express-rest-seed.git typescript-express-rest-seed

# change directory to the app
cd typescript-express-rest-seed

# install the dependencies
npm install

# start development mode
npm run dev
```

Open the browser to http://localhost:3000/api/users

#### Dev Configuration

When running in dev mode, the application will automatically execute each time you make a change to `app.ts` or any file that `app.ts` depends on (recursively).

Modify the auto-execution delay setting in `package.json` (defaults to 1500ms) to meet your needs. Ideally, you'll choose a number that will cause your application to only restart once, each time you make typical development changes. The optimal delay time will vary depending on the size of your project and your development machine.

-----

### Other NPM tasks

After running `npm install` once, you can:

#### Build the app

```sh
npm run build
```

#### Run the app once

When running the application, you must have the required environment variables set (if you don't, it's OK - application startup with fail and notify you of the values that you need to set)

```sh
npm start
```

#### Run the linter

Tailor the `tslint.json` to your likings

```sh
npm run lint
```