export const toolkit = {
  "languages": {
    logo: '/img/L.svg',
    content: [
      {
        title: 'JavaScript',
        altTitles: ['jacascript', 'js', 'es6', 'ES6'],
        docs: 'https://learn.javascript.ru',
        quality: 70,
        logo: '/img/js.png',
        description: 'JavaScript® (часто просто JS) — это легковесный, интерпретируемый или JIT-компилируемый, объектно-ориентированный язык с функциями первого класса. Наиболее широкое применение находит как язык сценариев веб-страниц, но также используется и в других программных продуктах, например, node.js или Apache CouchDB. JavaScript это прототипно-ориентированный, мультипарадигменный язык с динамической типизацией, который поддерживает объектно-ориентированный, императивный и декларативный (например, функциональное программирование) стили программирования',
      },
    ],
  },
  "frameworks": {
    logo: '/img/F.svg',
    content: [
      {
        title: 'Angular',
        altTitles: ['Angular'],
        docs: 'https://angular.io/docs',
        quality: 30,
        logo: '/img/angular.png',
        description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
      },
      {
        title: 'Vue JS',
        altTitles: ['Vue JS', 'Vue.js', 'Vue', 'vue'],
        docs: 'https://vuejs.org/v2/guide/',
        quality: 60,
        logo: '/img/vue.png',
        description: 'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.',
      },
    ],
  },
  "libraries": {
    logo: '/img/L.svg',
    content: [
      {
        title: 'React JS',
        altTitles: ['React JS', 'React', 'react'],
        docs: 'https://ru.reactjs.org/docs/getting-started.html',
        quality: 95,
        logo: '/img/react.png',
        description: 'React — это JavaScript-библиотека для разработки пользовательского интерфейса.',
      },
      {
        title: 'React-router',
        altTitles: ['React-router', 'react-router', 'router'],
        docs: 'https://reactrouter.com/',
        quality: 95,
        logo: '/img/router.png',
        description: 'A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app.',
      },
      {
        title: 'Redux',
        altTitles: ['Redux', 'Redux-Saga', 'Redux Saga', 'redux-saga', 'redux saga', 'saga'],
        docs: 'https://redux.js.org/',
        quality: 80,
        logo: '/img/redux.png',
        description: 'Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.',
      },
    ],
  },
  "bundlers": {
    logo: '/img/B.svg',
    content: [
      {
        title: 'Webpack',
        altTitles: ['Webpack', 'webpack'],
        docs: 'https://webpack.js.org/',
        quality: 80,
        logo: '/img/webpack.png',
        description: 'Webpack is a static module bundler for JavaScript applications — it takes all the code from your application and makes it usable in a web browser. Modules are reusable chunks of code built from your app’s JavaScript, node_modules, images, and the CSS styles which are packaged to be easily used in your website.',
      },
      {
        title: 'Gulp',
        altTitles: ['Gulp', 'gulp'],
        docs: 'https://gulpjs.com/',
        quality: 80,
        logo: '/img/gulp.png',
        description: 'Gulp — это таск-менеджер для автоматического выполнения часто используемых задач, написанный на языке программирования JavaScript.',
      },
    ],
  },
  "compilers": {
    logo: '/img/C.svg',
    content: [
      {
        title: 'TypeScript',
        altTitles: ['TypeScript', 'Typescript', 'typescript', 'TS', 'ts'],
        docs: 'https://www.typescriptlang.org/docs/',
        quality: 80,
        logo: '/img/ts.png',
        description: 'TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.',
      },
    ],
  },
  "formatters and linters": {
    logo: '/img/F.svg',
    content: [
      {
        title: 'ESLint',
        altTitles: ['ES-Lint', 'eslint', 'es-lint'],
        docs: 'https://eslint.org/docs/user-guide/configuring',
        quality: 70,
        logo: '/img/eslint.png',
        description: 'A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.',
      },
      {
        title: 'Prettier',
        altTitles: ['Prettier', 'prettier'],
        docs: 'https://prettier.io/',
        quality: 70,
        logo: '/img/prettier.png',
        description: 'Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.',
      },
    ],
  },
  "runtimes": {
    logo: '/img/R.svg',
    content: [
      {
        title: 'Node.js',
        altTitles: ['Node JS', 'Node', 'node'],
        docs: 'https://nodejs.org/en/docs/',
        quality: 60,
        logo: '/img/node.png',
        description: '',
      },
    ],
  },
  "testing": {
    logo: '/img/T.svg',
    content: [
      {
        title: 'Jest',
        altTitles: ['Jest', 'jest' ],
        docs: 'https://jestjs.io/docs/en/getting-started',
        quality: 60,
        logo: '/img/jest.png',
        description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!',
      },
      {
        title: 'React Testing Library',
        altTitles: ['React Testing Library', 'react-testing-library' ],
        docs: 'https://testing-library.com/docs/react-testing-library/intro',
        quality: 80,
        logo: '/img/testingLibrary.png',
        description: 'The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is: "The more your tests resemble the way your software is used, the more confidence they can give you."',
      },
    ],
  },
  "package managers": {
    logo: '/img/P.svg',
    content: [
      {
        title: 'NPM',
        altTitles: ['NPM', 'npm' ],
        docs: 'https://docs.npmjs.com/',
        quality: 90,
        logo: '/img/npm.png',
        description: 'npm is the world\'s largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.',
      },
      {
        title: 'Yarn',
        altTitles: ['Yarn', 'yarn' ],
        docs: 'https://classic.yarnpkg.com/en/docs/',
        quality: 80,
        logo: '/img/yarn.png',
        description: 'Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.',
      },
    ],
  },
  "version control": {
    logo: '/img/V.svg',
    content: [
      {
        title: 'GitHub',
        altTitles: ['GitHub', 'github', 'GH' ],
        docs: 'https://docs.github.com/en',
        quality: 95,
        logo: '/img/github.png',
        description: '',
      },
      {
        title: 'GitLab',
        altTitles: ['GitLab', 'gitlab', 'GL' ],
        docs: 'https://about.gitlab.com/get-started/',
        quality: 85,
        logo: '/img/gitlab.png',
        description: '',
      },
      {
        title: 'Bitbucket',
        altTitles: ['Bitbucket', 'bitbucket' ],
        docs: 'https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-cloud/',
        quality: 90,
        logo: '/img/bitbucket.png',
        description: '',
      },
    ],
  },
  "css preprocessors": {
    logo: '/img/C.svg',
    content: [
      {
        title: 'NPM',
        altTitles: ['NPM', 'npm' ],
        docs: 'https://docs.npmjs.com/',
        quality: 90,
        logo: '/img/npm.png',
        description: '',
      },
    ],
  },
  "css-in-js": {
    logo: '/img/C.svg',
    content: [
      {
        title: 'styled-components',
        altTitles: ['styled-components'],
        docs: 'https://styled-components.com/',
        quality: 95,
        logo: '/img/styled.png',
        description: 'Styled-components utilises tagged template literals to style your components. It removes the mapping between components and styles. This means that when you\'re defining your styles, you\'re actually creating a normal React component, that has your styles attached to it.',
      },
      {
        title: 'Emotion',
        altTitles: ['Emotion', 'emotion'],
        docs: 'https://emotion.sh/docs/introduction',
        quality: 90,
        logo: '/img/emotion.png',
        description: 'Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.',
      },
    ],
  },
  "task runners": {
    logo: '/img/T.svg',
    content: [
      {
        title: 'NPM',
        altTitles: ['NPM', 'npm' ],
        docs: 'https://docs.npmjs.com/',
        quality: 90,
        logo: '/img/npm.png',
        description: '',
      },
    ],
  },
  "static site generators": {
    logo: '/img/S.svg',
    content: [
      {
        title: 'NPM',
        altTitles: ['NPM', 'npm' ],
        docs: 'https://docs.npmjs.com/',
        quality: 90,
        logo: '/img/npm.png',
        description: '',
      },
    ],
  },
  "CMS": {
    logo: '/img/C.svg',
    content: [
      {
        title: 'Contentful',
        altTitles: ['Contentful', 'contentful' ],
        docs: 'https://www.contentful.com/developers/docs/',
        quality: 90,
        logo: '/img/contentful.png',
        description: 'It’s the modern way to manage content: Control all content from a single hub. Publish to any channel. Integrate hundreds of tools with our industry-leading app framework.',
      },
      {
        title: 'Ghost',
        altTitles: ['Ghost', 'ghost' ],
        docs: 'https://ghost.org/docs/',
        quality: 80,
        logo: '/img/ghost.png',
        description: 'Ghost makes it simple to publish content online, grow an audience with email newsletters, and make money from premium memberships.',
      },
    ],
  },
  "query languages": {
    logo: '/img/Q.svg',
    content: [
      {
        title: 'GraphQL',
        altTitles: ['GraphQL', 'graphQL' ],
        docs: 'https://docs.npmjs.com/',
        quality: 90,
        logo: '/img/graphql.png',
        description: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.',
      },
    ],
  },
  "API": {
    logo: '/img/A.svg',
    content: [
      {
        title: 'Google Maps',
        altTitles: ['Google Maps', 'GoogleMaps', 'google maps', 'GM', 'gm' ],
        docs: 'https://developers.google.com/maps/documentation/javascript/overview',
        quality: 90,
        logo: '/img/googleMaps.png',
        description: '',
      },
      {
        title: 'Youtube',
        altTitles: ['Youtube', 'YT', 'youtube' ],
        docs: 'https://developers.google.com/youtube/v3',
        quality: 90,
        logo: '/img/youtube.png',
        description: '',
      },
    ],
  },
  "packages": {
    logo: '/img/P.svg',
    content: [
      {
        title: 'NPM',
        altTitles: ['NPM', 'npm' ],
        docs: 'https://docs.npmjs.com/',
        quality: 90,
        logo: '/img/npm.png',
        description: '',
      },
    ],
  },
  "PaaS": {
    logo: '/img/P.svg',
    content: [
      {
        title: 'Netlify',
        altTitles: ['Netlify', 'netlify' ],
        docs: 'https://docs.netlify.com/',
        quality: 70,
        logo: '/img/netlify.png',
        description: 'Netlify is an all-in-one platform for automating modern web projects.',
      },
      {
        title: 'Heroku',
        altTitles: ['Heroku', 'heroku' ],
        docs: 'https://devcenter.heroku.com/categories/reference',
        quality: 60,
        logo: '/img/heroku.png',
        description: 'Heroku is a cloud platform that lets you build, deliver, monitor and scale apps — we\'re the fastest way to go from idea to URL, bypassing all those infrastructure headaches.',
      },
    ],
  },
  "PM tools": {
    logo: '/img/P.svg',
    content: [
      {
        title: 'Jira',
        altTitles: ['Jira', 'jira' ],
        docs: 'https://confluence.atlassian.com/jira/jira-documentation-1556.html',
        quality: 100,
        logo: '/img/jira.png',
        description: 'Jira is a workflow management system that lets you track your work in any scenario.',
      },
      {
        title: 'Trello',
        altTitles: ['Trello', 'trello' ],
        docs: 'https://developer.atlassian.com/cloud/trello/',
        quality: 100,
        logo: '/img/trello.png',
        description: 'Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what\'s being worked on, who\'s working on what, and where something is in a process.',
      },
    ],
  }
}