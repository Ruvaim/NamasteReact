## How do you create Nested Routes react-router-dom cofiguration

- To create nested routes we use children attribute.

```
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

## Read abt createHashRouter, createMemoryRouter from React Router docs.

- createHashRouter is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL". Other than that, it is functionally the same as createBrowserRouter. For more reference.

- createMemoryRouter Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment. For more reference

## What is the order of life cycle method calls in Class Based Components

- The order of life cycle method calls in class based components are first constructor will be called and then render method will be called and then componentDidMount will be called and then if state variable is updated then componentDidUpdate will be called and at last when the component is unmounting componentWillUnmount will be called

## Why do we use componentDidMount?

- We often use this to make API calls because it called after initial render and once data is fetched and set inside state variable then it will again call render method and render actual data.

## Why do we use componentWillUnmount? Show with example

- We use this to do cleanup activities like cleaning the intervals

```
componentWillUnmount(){
    clearInterval(timer)
}
```

## (Research) Why do we use super(props) in constructor?

- super(props) is used to inherit the properties and access of variables of the React parent class when we initialize our component. super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console. The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

## (Research) Why can't we have the callback function of useEffect async?

- useEffect expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.
