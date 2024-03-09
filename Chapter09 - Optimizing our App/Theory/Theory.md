## When and why do we need lazy()?

- We use this to make different bundle and to load the component dynamically whenever neened

## What is suspense?

- Suspence is an tag that is provided by react

## Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- We got this error because react was unable to load the component at that moment
- To fix this error we use suspense tag and provide a fallback to load

## Advantages and disadvantages of using this code splitting pattern?

- Faster Initial Load Time: By splitting your code into smaller chunks and loading them on-demand, code splitting reduces the initial load time of your application. Users can see and interact with the core functionality of your app more quickly, resulting in a better user experience.

- However, using code splitting and lazy loading in your React Native app can also have some drawbacks, such as increased complexity in development and testing processes, more network requests that can affect performance, and additional code and dependencies that can increase the bundle size

## When do we and why do we need suspense?

- When do want to do lazy loading at that time we need to wrap the component with suspense tag so that it should not throw an error and we need to provide a fallback inside suspense tag.
