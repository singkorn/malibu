---
title: Getting Started with Malibu
post_number: 01
tutorial: true
---

# {{page.title}}

Welcome to Quintype :-).

In this post we will cover how to get started, building a Quintype publisher app with React, Node and the Malibu framework.

## Prerequisites

Before starting, please ensure the following is installed on your development machine
* [Node LTS](https://nodejs.org) (10.15 at the time of writing), and npm
* Either [Supervisor](http://supervisord.org) or [Docker](https://www.docker.com) for running the development server
* git or the [GitHub App](https://desktop.github.com)

It is also strongly recommended that you have a working knowledge of the following before you get started
* How to use [React](https://reactjs.org) to build a front end application
* ES6 functionalily, including concepts like [promises](https://developers.google.com/web/fundamentals/primers/promises) and [async/await](https://developers.google.com/web/fundamentals/primers/async-functions)
* Git and Version Control

In many of these examples, we will be using [VS Code](https://code.visualstudio.com) for development. It's fine if you use another editor, but some of the keyboard shortcuts and intellisense may not work.

## Generating a new repository

The first step is to [Create a new repository from malibu](https://github.com/quintype/malibu/generate).

You can save the repository in your own organization, or you can ask the Quintype team to set up this repository under the quintype organization (by emailing support@quintype.com).

You may now clone this repository using the git command line or the [GitHub app](https://desktop.github.com).

```shell
$ git clone git@github.com:<your-org>/<your-repo>.git
```

If you plan to use docker on windows, then please ensure that the repository has been cloned within your user's home directory.

## Running the app locally

Please ensure all prerequisites have been installed, before proceeding with instructions for your specific operating system.

### Instructions for Mac OSX / Linux

Open a terminal, and change directory to the newly cloned repository.

```shell
$ cd path/to/new/repository
```

Executing the run script will start the development server. This will take a few minutes the first time while it downloads modules from npm.

```shell
$ ./run
...
Example app listening on port 3000!
Example app listening on port 3000!
Example app listening on port 3000!
Example app listening on port 3000!
```

**Running without Supervisor**

In case you would like to run this without supervisor, you may start the asset server in one terminal, then the node server in another terminal.

In a terminal, run
```shell
$ cd path/to/app
$ npm install
$ npm run asset-server
```

And in another terminal, run
```shell
$ cd path/to/app
$ npm run dev-server
```

### Instructions for Docker (any OS)

Open a terminal, and change directory to the newly cloned repository.

```shell
$ cd path/to/new/repository
```

Starting docker-compose will start the dev server. This will take a few minutes the first time while it downloads modules from npm.

```shell
$ ./dev-docker/start
...
web_1     | Example app listening on port 3000!
web_1     | Example app listening on port 3000!
web_1     | Example app listening on port 3000!
web_1     | Example app listening on port 3000!
```

## Checking that things work in the browser

Open a browser, and navigate over to [http://localhost:3000](http://localhost:3000). You should see something that looks like the following:

![Malibu Running]({{"images/malibu-running.jpg" | absolute_url}})

## Checking that hot reloading works

Keep your development server and browser running, and use your editor to open `app/isomorphic/components/header/index.js`.

Find the line that looks like this

```javascript
<div styleName="container">
```

and change it to this
```javascript
<div styleName="container blue">
```

Hit save, then come back to the browser. The header should immediately change to a blue background, and look like this:

![Malibu Blue]({{"images/malibu-blue.jpg" | absolute_url}})

If the browser didn't immediately reload, try refreshing your browser.

## Wrapping Up

Hooray, you now have a running instance of a simple quintype publisher!

You may now proceed to [Chapter 2, whatever it is about]() or jump to a recipe from the [Home Page]({{"/" | absolute_url}}).