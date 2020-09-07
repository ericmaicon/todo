# TODO app

A small todo full app with API and a site.

The main goal is to start an architecture with a full api and site structure with capabilities of grow and be maintanable after long period of use.

![todo](https://user-images.githubusercontent.com/1010637/92345270-22a61f00-f09f-11ea-956b-1a88d9de5f4c.gif)

## Table of Contents

- [Functional Requirements](#functional-requirements)
- [Install](#install)
- [Usage](#usage)
- [Development](#development)
- [API](#api)
- [Site](#site)
- [Tests](#tests)

## Functional Requirements

1. Build a page that lists tasks displaying their title and status
2. The tasks must contain:
   1. Title
   2. Description
   3. Status(​Pending, In Progress, Done​)
3. Display the description of a task in a popover when hovering a task title
4. In the same page, build a form to create new tasks
5. Display the tasks according to the following requirements:
   1. Pending tasks must be displayed in orange.
   2. In Progress tasks must be displayed in green.
   3. Done tasks must be displayed in strikethrough.
6. Create a button/link to start the task and that, when clicked, changes the status of the task to In Progress.
7. Create a button/link to complete the task and that, when clicked, changes the status of the task to Done.

## Install

This project uses [node](http://nodejs.org) and [yarn](https://yarnpkg.com/). Go check them out if you don't have them locally installed. If you don't have MySQL installed, you might need [Docker](https://www.docker.com) and [Docker-compose](https://docs.docker.com/compose/) to run it using configurations from this repository.

```sh
yarn install
npx lerna bootstrap
sh ./build.sh
```

This `build.sh` is a script that build every single package from this repository. If you are on Windows and it didn't work, you can try access each package and run `yarn build`


To start MySQL using docker:

```sh
docker-compose up -d
```

## Usage

To start using locally the API, you should:

```sh
cd api/main
cp .env.local .env
```

be aware that `.env.local` is configured to use docker-compose.yml configuration. If you are using another MySQL instalation, change the configuration.

```sh
yarn knex migrate:latest
```

To run the server, you can use the following command. You can try to access at [http://0.0.0.0:4000/graphql](http://0.0.0.0:4000/graphql):

```sh
yarn start
```

## Development

To start code, you might need to run to link all dependencies and avoid import errors during development:

```sh
npx lerna bootstrap
```

You can use watch command while code the API by:

```sh
cd api/main
yarn dev
```

To run the tests, you can use the following command:

```sh
yarn test
```

In `main`, folder we have integration tests, which depends on database. To do so, it is needed to run if you are using docker:

```sh
echo "CREATE DATABASE todo_test" | docker exec -i mysql /usr/bin/mysql -u root --password=123
cp .env.test .env
yarn knex migrate:latest
yarn test
```

To start the site:

```sh
cd site/main
cp .env.local .env
yarn dev
```

You can access the website via [http://localhost:3000/](http://localhost:3000/)

## API

The main goal behind the api is split the code in a way that it can be maintanable by following SOLID principle in a clean architecture.

Lerna is used here as monorepo/multi package tool to be able to have a differents packages per layer. In a huge project, it can be slight different and slice by modules (users, tasks, ...).

The integration between the layers has been made with interfaces and dependency injection. This way, each layer is isolated and one layer (main) can call all and implement via factory or directly, the dependencies.

### Data Layer

Data layer is where the repository classes lives. This classes are responsible to interact with a data source. Be aware that is important to not attach any data source framework in the data layer as this needs to be consistent. If in the future the requirement change and ask for another technology, it is easier to change the Adapter instead of touch all the code.

### Domain Layer

Domain layer is responsible to implement the system logic and call repositories to interact with the data. Again, here the main goal is not attach the two layers, but use them as protocols in a way that everything is decoupled.

### Main (Presentation) Layer

This layer is responbile of mount the pluzze. It will instantiate every layer, put them together and server express (or any other tool). The idea is keep it as much as possible decoupled from Express, so it can use any other tool if the requirements changes.

## Vendor

Vendor is a place where every 3rd library tools is. This is a way to avoid the code/logic depends too much of a 3rd library.

### Graphql queries and mutations

To be able to use the API, you can use the following queries:

Fetch tasks

```
{
  getTasks {
    id
    title
    description
    status
  }
}
```

Create tasks

```
mutation CreateTask(
  $title: String,
  $description: String
) {
    createTask(title: $title, description: $description)
}
```

update status text

```
mutation UpdateStatusTask(
  $id: ID,
  $status: String
) {
    updateStatusTask(id: $id, status: $status)
}
```

## Site

The main goal behind the site is to have a way of grow the code easily. To do so, one UI library was created to separate the core components from the logic.

The Site also tries to achieve the Clean architecture with a logic separation from the presentation logic.

There are some improvements to make so the system can be used for large scale:

1. Add a css library such as styled-components.
2. Add a form library to handle everythin, such as formik.

### UI Library

UI Library has every core component from the system that has been used. You can check it using [storybook](https://storybook.js.org/) with the following command:

```sh
cd site/ui
yarn storybook
```

You can access at [http://localhost:6006/](http://localhost:6006/)

### Data Layer

This is the data responsible to know about the query and mutations. No other layer should know it.

### Domain Layer

This is the layer responsible for validation, logic and calling data layer.

### Main (Presentation) Layer

The main layer, where everything is connected.

### Vendor

Vendor is where the 3rd libraries is, like apollo.

## Tests

Each module has its own tests (apart from vendors and UI). There is no need of tests on vendors as we shouldn't test 3rd libraries.

There is the unit tests in all over modules.

There is integration tests in the api.

To improve: add cypress on site/main package to test e2e.
