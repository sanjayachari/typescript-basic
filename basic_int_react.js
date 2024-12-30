/*
1. What is React?
Answer:
React is an open-source JavaScript library developed by Facebook for building user interfaces. It allows the creation of reusable UI components and manages the state of an application. React is commonly used for building single-page applications (SPAs).

2. What are functional components in React?
Answer:
Functional components are JavaScript functions that accept props as an argument and return React elements (JSX). They are simpler and are the modern way of writing components in React, especially with the introduction of hooks.

javascript
Copy code
const MyComponent = () => {
    return <h1>Hello, World!</h1>;
};
3. What are hooks in React?
Answer:
Hooks are special functions in React that allow functional components to manage state and side effects. They were introduced in React 16.8. Common hooks include:

useState: Manages state in functional components.
useEffect: Handles side effects (like fetching data) in functional components.
useContext: Allows you to use React context in functional components.
4. What is useState in React?
Answer:
useState is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

javascript
Copy code
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
5. What is useEffect in React?
Answer:
useEffect is a hook used to handle side effects in functional components. It can be used for tasks like fetching data, setting up subscriptions, or modifying the DOM. It runs after the render and can be configured to run on component mount, update, or unmount.

javascript
Copy code
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    useEffect(() => {
        console.log('Component mounted or updated');
    }, []); // Empty dependency array means it runs only on mount.

    return <h1>Hello, World!</h1>;
};
6. What are props in React?
Answer:
Props (short for properties) are inputs to React components. They allow data to be passed from a parent component to a child component. Props are immutable and cannot be modified by the child component.

javascript
Copy code
const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

<Greeting name="John" /> // 'name' is passed as a prop
7. What is the difference between props and state in React?
Answer:

Props: Immutable data passed from parent to child components. Props cannot be changed by the child component.
State: Mutable data managed within a component. State can be changed using functions like setState (in class components) or useState (in functional components).
8. What is JSX in React?
Answer:
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript. It is used to describe the UI structure in React components and is eventually transformed into React elements.

javascript
Copy code
const element = <h1>Hello, World!</h1>;
9. What are the lifecycle methods in React?
Answer:
In functional components, lifecycle methods are handled by useEffect. In class components, they are methods like componentDidMount, componentDidUpdate, and componentWillUnmount. In functional components, useEffect can handle tasks like fetching data, updating the DOM, etc., and can be configured to run on mount, update, or unmount.

10. What is the purpose of useContext in React?
Answer:
useContext is a hook that allows you to access values from a React context. It is used to avoid prop drilling by allowing a component to directly access data from a context.

javascript
Copy code
const MyComponent = () => {
    const theme = useContext(ThemeContext);

    return <div style={{ color: theme.color }}>Hello</div>;
};
11. What is React Router?
Answer:
React Router is a library used for handling routing in React applications. It enables navigation between different components or views without reloading the page. React Router helps build single-page applications (SPAs) with multiple views.

javascript
Copy code
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
    </Router>
);
12. What is the Virtual DOM in React?
Answer:
The Virtual DOM is a lightweight copy of the real DOM. React uses it to optimize performance by updating only the parts of the DOM that have changed. React first updates the Virtual DOM, compares it with the real DOM, and then updates only the necessary elements, reducing the amount of direct manipulation of the real DOM.

13. What are the benefits of React?
Answer:

Component-Based Architecture: Reusable components lead to cleaner and more maintainable code.
Declarative Syntax: React allows developers to describe the UI state, and React takes care of updating the DOM.
Efficient Updates with Virtual DOM: React minimizes the number of direct DOM manipulations, resulting in faster updates and improved performance.
Unidirectional Data Flow: Data flows in one direction, making it easier to understand and debug the application
*/