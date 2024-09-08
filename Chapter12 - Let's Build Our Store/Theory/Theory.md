# useContext vs Redux.

- Both are used to manage the state in the central store, it solves to problem of props drilling.
- useContext is simpler, easy to use and useful for small applications
- redux is complex, and used in large applications

# Advantage of using Redux Toolkit over Redux.

- redux toolkit is easier to use as compare to redux
- In redux toolkit we can directly modify the state whereas in redux we can't modify the state.

# Explain Dispatcher ?

- In Redux, a dispatcher is not a standalone concept; instead, it's a term often used to refer to a function called dispatch. The dispatch function is a key part of the Redux store, and it plays a crucial role in the Redux data flow

# Explain Reducer ?

- In Redux Toolkit, the createSlice function is commonly used to create reducers . It simplifies the process of defining actions and the corresponding reducer logic, reducing boilerplate code. Let's break down the key concepts related to creating reducers with createSlice in Redux Toolkit :

# Explain Slice ?

- In Redux Toolkit, a slice is a collection of Redux-related code, including reducer logic and actions, that corresponds to a specific piece of the application state. Slices are created using the createSlice utility function provided by Redux Toolkit. The primary purpose of slices is to encapsulate the logic related to a specific part of the state, making the code more modular and easier to manage.

# Explain createSlice and the configuration it takes?

- createSlice is a utility function provided by Redux Toolkit that simplifies the process of creating Redux slices . A Redux slice is a piece of the Redux store that includes a set of actions, a reducer, and an initial state . The createSlice function helps reduce boilerplate code associated with defining actions and the reducer for a specific slice of your Redux store.
