## What is the difference between Named Export, Default export and \* as export?

- Named export means we can export more than 1 thing from a particular file

```
import { CDN_URL } from "../utils/constants";

export const CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/';
```

- default export means we can export only 1 thing from a particular file

```
import RestaurantCard from './RestaurantCard';

export default RestaurantCard;
```

- In _ as export, it is used to import the whole module as a component and access the components inside the module. In _ as export, the component is exported from MyComponent.js file like:

```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
```

and the component is imported from MyComponent.js file like:

```
import * as MainComponents from "./MyComponent";
```

Now we can use them in JSX as:

```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

## What is the importance of config.js file

config.js files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable. Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces. Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:

```
Ruvaim
```

Usually, though, an application needs to keep track of more than just one piece of information, so configuration often uses a key and a value:

```
NAME='Ruvaim'
SURNAME='Kashimji'
```

## What are React Hooks?

In React version 16.8, React introduced a new pattern called Hooks.In React version 16.8, React introduced a new pattern called Hooks.

## Why do we need a useState Hook?

It is use to create superpowerfull state variables in react. It is called state variable because it maintain the local state of that variable. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
