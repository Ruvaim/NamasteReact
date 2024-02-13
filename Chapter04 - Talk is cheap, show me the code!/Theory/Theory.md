## Is JSX mandatory for React?

- No, jsx is mandatory in react but with the help of jsx it make our life easier to write the react

## Is ES6 mandatory for React?

- If you don't use ES6 yet, you may use the create-react-class module instead:

```
var createReactClass = require('create-react-class');
var Greeting = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```

- The API of ES6 classes is similar to createReactClass() with a few exceptions.

## How can I write comments in JSX?

- {/_ Your Comment _/} this is the syntax for writing comment

## What is <React.Fragment></React.Fragment> and <></> ?

- `<>` is the shorthand tag for `React. Fragment` which allows us to group a list of elements without wrapping them in a new node. The only difference between them is that the shorthand version does not support the `key` attribute.

## What is Virtual DOM?

- React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.

## What is Reconciliation in React?

- Reconciliation is the process of comparing the previous state of the DOM with the new state, identifying the differences, and updating only the necessary parts to reflect the changes. The diffing algorithm is a core part of this reconciliation process in React. js.

## What is React Fiber?

- React fiber is a complete rewrite of react that fixes a few long-standing issues and offers incredible and offers opportunities heading into the future. Goals of React Fiber: Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and prioritize tasks.

## Why we need keys in React? When do we need keys in React?

- Key attribute is used to uniquely identify the card
- If we doesn't give key attribute react doesn't know which new card we have added, it will re render all the cards and if we give key element react will exactly know will is the new card and it will only render that card instead of re-rendering whole container

## Can we use index as keys in React?

- Yes we can use index as keys but it is not recommended to use index as a key.

## What is props in React? Ways to

- Props is the short form for properties. Props is something which we can pass to the component
- Suppose we want to pass dynamic data to the component we can do that using props
- Props are just normal arguments to a function at the end of the day. Passing a props to a component is same as we pass arrument to the function. We can pass any numbers of props to the component
- Then react will wrap all the passed props into one object called as **props**
- We can then access props as an parameter in component
- Also we can directly destructure the props

## What is a Config Driven UI ?

- Our website driven by config
- Controling ur UI using data/config
- config will comes from backend
- Suppose there is an carousel in a website that shows the offers that is currently running in your city(Bangalore) and the same carousel will show different offers to others that is currently running in there city, according to there city carousel data will be changed and suppose there is no offer currently running in city then the UI will not show that carousel this is known as config driven UI.
