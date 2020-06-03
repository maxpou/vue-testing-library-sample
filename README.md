# vue-testing-library-sample

[![Build Status](https://travis-ci.org/maxpou/vue-vuex-jest.svg?branch=master)](https://travis-ci.org/maxpou/vue-vuex-jest) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![Netlify Status](https://api.netlify.com/api/v1/badges/d7d58895-6e07-46ba-9b53-7e14acd6e252/deploy-status)](https://app.netlify.com/sites/vue-testing-library/deploys)


> A Vue.js project to test [Jest](https://facebook.github.io/jest/) and [Testing-library](https://github.com/testing-library). Data come from [Star Wars API](https://swapi.co/).


## What's inside

* [VueJs 2](https://vuejs.org/)
* [vuex](https://vuex.vuejs.org/en/) (state management)
* [vue-router](https://github.com/vuejs/vue-router) (router)
* [Axios](https://github.com/mzabriskie/axios) (a library for XMLHttpRequests)

... For testing:

* [Facebook/Jest](https://facebook.github.io/jest/)
* [Testing-library](https://testing-library.com/docs/vue-testing-library/intro)
* [Jest-dom](https://github.com/testing-library/jest-dom) (Custom jest matchers to test the state of the DOM)


## Installation

1. Clone this project. `git clone https://github.com/maxpou/vue-vuex-jest`
2. Install dependencies `npm install`
3. Run the app with `npm start`


![app screenshot](./app-screen.png)

To run the test suite, run `npm test`.  
You can also use the following options:

```bash
# Run tests + generate coverage
npm test -- --coverage

# Run tests in watch node
npm test -- --watchAll

# Run tests + update snapshots if needed. There're NO snapshot in this repo.
npm test -- -u
```


Note: this project is based on [vue-cli](https://cli.vuejs.org).


## Coverage


```
> npm test -- --coverage

----------------------|----------|----------|----------|----------|-------------------|
File                  |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------|----------|----------|----------|----------|-------------------|
All files             |    97.75 |    88.89 |    94.44 |    97.59 |                   |
 src                  |      100 |      100 |      100 |      100 |                   |
  App.vue             |      100 |      100 |      100 |      100 |                   |
  router.js           |      100 |      100 |      100 |      100 |                   |
 src/components       |      100 |      100 |      100 |      100 |                   |
  CatalogList.vue     |      100 |      100 |      100 |      100 |                   |
  CatalogListItem.vue |      100 |      100 |      100 |      100 |                   |
  Navbar.vue          |      100 |      100 |      100 |      100 |                   |
  VPrice.vue          |      100 |      100 |      100 |      100 |                   |
 src/services         |    71.43 |    66.67 |       50 |    71.43 |                   |
  dataFormatter.js    |      100 |      100 |      100 |      100 |                   |
  swapi.api.js        |    33.33 |        0 |        0 |    33.33 |              6,10 |
 src/store            |      100 |      100 |      100 |      100 |                   |
  index.js            |      100 |      100 |      100 |      100 |                   |
  mutation-types.js   |      100 |      100 |      100 |      100 |                   |
 src/store/modules    |      100 |      100 |      100 |      100 |                   |
  basket.js           |      100 |      100 |      100 |      100 |                   |
  catalog.js          |      100 |      100 |      100 |      100 |                   |
 src/views            |      100 |      100 |      100 |      100 |                   |
  Basket.vue          |      100 |      100 |      100 |      100 |                   |
  Catalog.vue         |      100 |      100 |      100 |      100 |                   |
  StarshipDetail.vue  |      100 |      100 |      100 |      100 |                   |
 tests                |      100 |      100 |      100 |      100 |                   |
  render.js           |      100 |      100 |      100 |      100 |                   |
----------------------|----------|----------|----------|----------|-------------------|
```
