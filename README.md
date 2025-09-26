# 1 . What is JSX, and why is it used?


Ans : JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly inside your JavaScript code. It's not a string or HTML, but a special syntax that gets transformed into regular JavaScript function calls.


# 2 . What is the difference between State and Props?

Ans : Props: are like function parameters. They are data passed down from a parent component to a child component. Props are immutable (read-only) inside the child component.

State: is like a component's internal memory. It is data managed within the component itself. State is mutable (can be changed) and when it changes, the component re-renders.


# 3 . What is the useState hook, and how does it work?


Ans : useState is a React Hook that allows you to add state to functional components. It lets you store data that can change over time and, when changed, triggers a re-render of the component to reflect the new value.

How it works: call useState(initialValue) to create a state variable and a function to update it. When you call the update function, it changes the state and tells React to re-render the component.


# 4 . How can you share state between components in React?

Ans :  share state by lifting it up to the closest common parent component. The parent component manages the state and passes it down to child components via props. To allow children to update the shared state, the parent also passes down setter functions as props.


# 5 . How is event handling done in React?

Ans :In React, you handle events by passing function references as props to JSX elements (like onClick, onChange). Instead of using lowercase names like onclick, React uses camelCase naming conventions. You prevent default behavior explicitly with e.preventDefault() instead of returning false.