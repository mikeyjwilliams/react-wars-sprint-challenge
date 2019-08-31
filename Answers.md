# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- react JS is a user interface library, it tries to solve the issue of rerendering everything, or even the item but specifying that single comonent to rerender.
-  With react you build components, instead of everything being reacreated when you check an item to be done it just recreates the list of to do items, nothing else on the page.

1. What does it mean to think in react?

    1. react is component based, everything is a component or a part of the whole item or if your at the center it is the item itself and the building block to make an item.
    2. react has unidirectional data flow, all data flows top down in React components.

1. Describe state.
    
    - state is changeable data.

1. Describe props.
   
    - props are data that is passed from the props parent component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    - side effects are changes outside of the function.
    - to sync effects you would use useEffect and a subscriber for that connects to state or the prop.
