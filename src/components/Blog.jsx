import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-9/12 w-full m-auto bg-[#f1f1f1]'>
          <div className='bg-purple-300 px-6 py-10 my-4
          '>
          <h2 className="text-3xl font-bold font-mono">
                Question:1 What is The Purpose Of React Router ?
            </h2>
            <p className='text-2xl'>
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. This is so helpful to create a SPA Single Page Website. 
            </p>
          </div>

          <div className='bg-purple-600 text-white px-6 py-10 my-4
          '>
          <h2 className="text-3xl font-bold font-mono">
                Question:2 How Does Context API Works ?
            </h2>
            <p className="text-2xl">
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            React.createContext is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
            </p>
          </div>
          <div className='bg-purple-300 px-6 py-10 my-4
          '>
          <h2 className="text-3xl font-bold font-mono">
                Question:3 About useRef  ?
            </h2>
            <p className="text-2xl">
            You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.

However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a  object yourself is that useRef will give you the same ref object on every render.
            </p>
          </div>
        </div>
    );
};

export default Blog;