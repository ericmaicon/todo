# TODO app

A small todo full app with API and a site.

## Table of Contents

- [Requirements](#requirements)
- [Install](#install)

## Requirements

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
```

To start MySQL using docker:

```sh
docker-compose up -d
```
