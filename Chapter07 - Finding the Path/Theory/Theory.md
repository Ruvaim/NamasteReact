## What are various ways to add images into our App? Explain with code examples

- There are two ways to add images in react. First way is to add full url in img tag. second way is to import the image from directory.

```
First way
<img src="image-url"/>

second way
import Image from "./img/image.png"
```

## What would happen if we do console.log(useState())?

- It will print array with one variable and second function to change that variable
  we get an array [undefined, function]

## How will useEffect behave if we don't add a dependency array ?

- useEffect will run everytime whenever component will render

## What is SPA?

- Single Page Application (SPA) is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a single-page interface (SPI).

## What is difference between Client Side Routing and Server Side Routing?

- In Server Side Routing When we go on about page and then it fetchs the data from server and then it loads it(Like when we go on about page it will make a server call and then load that page). It refreshs the whole page it is called as server side routing
- In Client Side Routing only one server call will be made and to the server and get all the data. Like when we go on about page it will not make server call, in react it will just change the component. All Single Page Applications uses client-side routing.
