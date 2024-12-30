/*
1. What is the purpose of React.memo?
Answer:
React.memo is a higher-order component (HOC) that prevents unnecessary re-renders of a component by memoizing its output. It only re-renders the component if its props change. It is mainly used for performance optimization in functional components.

javascript
Copy code
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
2. What are controlled components in React?
Answer:
In React, controlled components refer to components where the form data (such as input values) is controlled by the React state. The value of the input is bound to a state variable, and updates to the input field are handled via onChange events that update the state.

javascript
Copy code
function MyForm() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
3. What are uncontrolled components in React?
Answer:
Uncontrolled components in React are form elements whose value is handled by the DOM rather than React state. They use a ref to access the DOM value directly. Unlike controlled components, the input value is not tied to the state.

javascript
Copy code
function MyForm() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert('Input value: ' + inputRef.current.value);
  };

  return <input ref={inputRef} type="text" />;
}
4. Explain React Hooks and their advantages.
Answer:
React Hooks are functions that allow functional components to have state and side-effects. The main hooks are:

useState: Manages state in functional components.
useEffect: Performs side effects (e.g., fetching data, DOM manipulation).
useContext: Provides a way to share state between components without passing props.
useRef: Accesses and manipulates DOM elements or stores mutable values.
Advantages:

Hooks simplify the code and make it more reusable.
They eliminate the need for class components, making the code easier to understand and maintain.
They allow functional components to handle state and side effects.
5. What is the difference between useEffect and componentDidMount?
Answer:

componentDidMount: A lifecycle method in class components that runs after the component has been mounted. It is commonly used for initial data fetching or DOM manipulation.

javascript
Copy code
class MyComponent extends React.Component {
  componentDidMount() {
    // Perform an action after the component mounts
  }
}
useEffect: A hook used in functional components to handle side effects. It runs after the component renders, similar to componentDidMount, but can also be used to manage cleanup or trigger re-renders when specific dependencies change.

javascript
Copy code
useEffect(() => {
  // Perform side-effect actions here
}, []); // Empty dependency array means this runs once after the initial render
6. What is Context API in React?
Answer:
The Context API is a feature in React that allows you to share state across the component tree without having to manually pass props through every level. It is useful for managing global states like themes, authentication, etc.

javascript
Copy code
const MyContext = React.createContext();

function Parent() {
  return (
    <MyContext.Provider value={{ name: 'John' }}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const context = useContext(MyContext);
  return <div>{context.name}</div>;
}
7. What is the useCallback hook in React?
Answer:
useCallback is a hook that returns a memoized version of a callback function. It is useful to avoid unnecessary re-renders when passing functions as props to child components.

javascript
Copy code
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <button onClick={increment}>Increment</button>;
};
8. What is the useMemo hook in React?
Answer:
useMemo is a hook that returns a memoized value. It helps optimize performance by avoiding expensive calculations on every render unless specific dependencies change.

javascript
Copy code
const MyComponent = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    return count * 1000; // Expensive operation
  }, [count]);

  return <div>{expensiveCalculation}</div>;
};
9. What are render props in React?
Answer:
Render props is a pattern in React where a component shares its state or behavior with another component using a function as a prop. The receiving component can use this function to render its UI.

javascript
Copy code
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

const App = () => (
  <MouseTracker
    render={(mouse) => (
      <h1>The mouse position is ({mouse.x}, {mouse.y})</h1>
    )}
  />
);
10. How does React's Virtual DOM work?
Answer:
React uses a Virtual DOM (VDOM) to improve performance by minimizing direct manipulation of the actual DOM. When a component's state or props change, React creates a virtual representation of the DOM and compares it with the previous one using a process called "reconciliation." React then updates only the parts of the actual DOM that need to be changed, rather than re-rendering the entire DOM.

11. What is the difference between a "pure" component and a "regular" component?
Answer:

Pure Component: A PureComponent automatically implements shouldComponentUpdate with a shallow comparison of props and state. This reduces unnecessary re-renders if the props and state have not changed.
javascript
Copy code
class MyPureComponent extends React.PureComponent {
  render() {
    return <div>{this.props.value}</div>;
  }
}
Regular Component: A regular component re-renders every time the state or props change, without any optimization unless manually implemented with shouldComponentUpdate.
12. What is React.StrictMode?
Answer:
React.StrictMode is a wrapper component that helps identify potential problems in an application during development. It activates additional checks and warnings for its descendants. It does not affect production builds.

javascript
Copy code
<React.StrictMode>
  <App />
</React.StrictMode>
*/