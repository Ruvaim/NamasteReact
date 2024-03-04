## What is a Microservice?

- In Micro services we have different services for different jobs. Like we have different service for Backend service, we have service for UI, we have service for authentication, we have service for Database etc. All this microservices combine form a big appication

## What is Monolith architecture?

- It is a whole big application where everything is in that same program like we had api,UI,authentication,database,sms services,backend etc. If we wanted to change the color of btn then we have to compile and build entire application again and deploy it. In Monolith architecture we need to do everything using one tech stack.

## What is the difference between Monolith and Microservice?

Monolith architecture is whole big application where everything(Every Service) is in same program where as microservices has different servies for different jobs

## Why do we need a useEffect Hook?

- useEffect is to run the callback as soon as render cycle is completed and it will re-run if value of variables/state changes in dependency array

## What is Optional Chaining?

- Opitonal chaining is used to avoid error when we try to loop over empty object or undefined object

## What is Shimmer UI?

- A shimmer UI is a version of the UI that doesn't contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.
- It is kind of like we load fake page until we get the data from API, instead of using loading we can use Skeleton

## What is the difference between JS expression and JS statement

- Anything that can be used as an value is an expression and statements are executed to make something happen.

## What is Conditional Rendering, explain with a code example

- Conditional rendering means where specific block of code is render based on some condition

```
return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    //code
  )
```

## What is CORS?

- CORS is abbreviated as cross-origin resources sharing
- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## What is async and await?

- async is used to define async function and await is the keyword that is used inside async function

## What is the use of `const json = await data.json();` in getRestaurants()

- It is used to resolve the promise object that is recieved from api request
