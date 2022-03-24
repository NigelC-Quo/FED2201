Q. What Is React?  

A. React is a library for Javascript that is used for creating interfaces in SPAs.	
	
Q. What is JSX?  
	
A. JSX is a syntax extension to Javascript that's neither a string or html, and is usually used for the UI. 
   JSX produces React elements, and although React does not require JSX, it helps as a visual aid.
	
Q. Explain the different types of components.  
	
A. Components allow you to reuse and isolate UI elements in the code.
   They accept inputs called props that return React elements that display on screen.
   To define a component, you can either write a Javascript function or ES6 class that have
   a prop as an argument which returns a React element. Another type of component is the pure 
   component which is similar to regular components except that it implements shouldComponentUpdate()
   with a shallow prop and state comparison.
	
Q. What are higher order components?  
	
A. A type of function that can change an existing component into another component and a great way 
   to reuse component logic. However, it is not actually apart of Reacts API and instead a result of its
   compositional nature.
	
Q. What is context?  
	
A. Context allows data to be shared all throughout a React tree without manually 
   passing down props through many levels.
	
Q. What is State and Props?  
	
A. Props or properties are arguments for React components. It can take attributes from elements
   and have components receive them as a props object. Props are also used to pass data down from one component to another.
   State is similar to props but the component controls it and it's private.
	
Q. What Are Hooks?  
	
A. Hooks are an addition to React 16.8 and are a type of function that lets you use specific React features
   like using a state without having a class (State Hook), or defining what side effects happen after render (Effect Hook).
    
	
Q. What are some of the “Rules” of Hooks?  
	
A. Only call Hooks in the top-level before return so that they can be called on in the same order every time when 
   the component renders. A good practice is to never call Hooks in loops or if statements, and only call
   them in react components so that it's easily visible from the source.
	
Q. What are error boundaries?  
	
A. A React component that's used to catch JS errors in it's child tree and enables logging and a fallback UI
   feature that displays instead of the component that crashed. Error boundaries however can't catch async code, 
   event handlers, server side rendering, and errors within itself.
	
Q. What are Keys?

A. Keys are string attributes that are needed when extracting data from lists. They can pinpoint which 
   items are added, removed, or changed, and the best way to use them is to give each of your keys an ID so that they
   can differentiate the list items, or else React will default to using indexes as keys.