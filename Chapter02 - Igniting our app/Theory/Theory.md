## What is NPM?

- NPM is an package manager
- It is an standard repositary for all the packages
- It doesn't have any fullform

## What is Parcel/webpack? Why do we need it?

- These all are the bundler that help us to build optimize app
- These are the type of web application bundler used for development and production purposes or power our application with different type of features and functionality.
- We need it for many reason like for minifying our code and making it optimized

## What is ".parcel-cache"

- .parcel-cache is used by parcel to reduce the builder time. It stores information about your project when parcel builds it.

## What is npx?

- NPX is tool that is used to execute the packages.
- It is used to execute the package that we have install using npm

## What is difference between dependency and devDependencies?

- Dependency is a package that gives extra features and tools to our application and it will work in both production as well as development
- devDependency is for the developer that help developer to build the app smoothly and provide many useful tools for developer.

## What is tree shaking?

- Suppose you have 100s of algorithm in your project but you are using only 4-5 algorithms then it will remove all the unnecessay algorithm and minify our code.

## What is Hot Module Replacement?

- Hot module replacement automatically reloading the app when there is some changes in the application.

## List down your 5 superpower of parcel and describe any 3 of them in your own words

- It creates dev build, local server and parcel is automatically reloading the app which means HRM(Hot Module Replacement)
- Parcel is also doing caching for you which give you faster build
- Parcel will also do image optimizes
- When we create production build it will create minification
- Parcel will also do bundling
- Parcel will also do compressing
- Parcel uses consistent hashing
- Parcel also does code splitting

## What is gitignore? What should we add and shouln't add into it?

- If you want something that shouldn't go to production/github we just put that inside gitignore
  For ex: node_modules folder, dist folder should be added in gitignore because we can regenarate it and package.json should not be added to gitignore.

## What is the difference between package.json and package-lock.json

- package-lock.json keep the track of exact version of dependency that is being install while package.json can have a tilde
- package.json keep approx version of dependency but package-lock.json keep exact version of dependency

## Why should i not modify package-lock.json

- package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

## what is node_modules? Is it a good idea to push that on git?

- Node_modules contains all the code that we fetch from npm
- node_modules is kind of database that contains all the codes
- node_modules basically fetches all the code of all the dependency into our system and then we can use that code.
- We don't need to push this folder to github or production if we have package.json or package-lock.json we can recreate this folder.

## What is dist folder?

- The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
- dist folder contains all the build files when parcel completes it builds.
- It will take less time for development build and more time for production build.

## What is browserlists?

- It is an package by which we can decide which browser or version of browser should support our app
- We need to configure browerlists in our package.json file

## Read about different buldler: Vite, webpack etc

## Read about ^- caret and ~ - tilda

- caret means if there some new minor update(like 2.10.4) released after some time it will automatically update to that version
- tilde means if there some new major update(like 3.10.3) released after some time it will automatically update to that version
- Always it is safe to use caret but not tilde because when you have an major update lot of thing may break in your app

## Read about script types in html(MDN Docs)
