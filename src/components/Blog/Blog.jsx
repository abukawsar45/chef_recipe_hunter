import React from 'react';

const Blog = () => {
  return (
    <div className='bg-violet-500'>
      <h2 className='text-center md:mx-6 pt-2 md:pt-5 lg:pt-8 text-5xl font-bold text-lime-400'>
        Blog page
      </h2>
      <div className='mx-2 md:mx-6 my-2 md:my-4 px-0 md:px-4 lg:my-8 py-2 bg-slate-200 border-2 rounded'>
        <h2 className='text-3xl font-serif px-1 md:px-4 lg:px-7 py-2 md:py-4 lg:py-6'>
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h2>
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Uncontrolled components:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          Uncontrolled components are those where the form data is handled by
          the DOM itself instead of being handled by the React component. In an
          uncontrolled component, the input value is managed by the browser, not
          React. The component is responsible for rendering the initial value,
          but after that, the DOM handles any updates. Typically, the value is
          read from the DOM using a ref.
        </p>
        <br />
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Controlled components:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          Controlled components, on the other hand, are those where the value of
          the form elements is controlled by React. In other words, React
          maintains the state of the component and updates the value of the form
          element every time the state changes. A controlled component allows us
          to manage the form state with React, giving more control to the
          developer over the form data.
        </p>
        <hr />
      </div>
      <div className='mx-2 md:mx-6 my-2 md:my-4 px-0 md:px-4 lg:my-8 py-2 bg-slate-200 border-2 rounded'>
        <h2 className='text-3xl font-serif px-1 md:px-4 lg:px-7 py-2 md:py-4 lg:py-6'>
          2. How to validate React props using PropTypes?
        </h2>
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Answer:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          React provides a built-in library called PropTypes to validate the
          types of props passed to a component. PropTypes helps to ensure that
          the props passed to a component have the expected type and structure,
          making it easier to catch bugs and improve the reliability of the
          application.In summary, PropTypes is a powerful tool for validating
          the types and structure of props passed to a React component. By using
          PropTypes, you can catch errors early and ensure the reliability of
          your application.
        </p>

        <hr />
      </div>
      <div className='mx-2 md:mx-6 my-2 md:my-4 px-0 md:px-4 lg:my-8 py-2 bg-slate-200 border-2 rounded'>
        <h2 className='text-3xl font-serif px-1 md:px-4 lg:px-7 py-2 md:py-4 lg:py-6'>
          3. Tell us the difference between nodejs and express js.
        </h2>
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Node js:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          Node.js is a JavaScript runtime environment that allows developers to
          run JavaScript code on the server-side. It is built on top of the
          Chrome V8 JavaScript engine and provides an event-driven, non-blocking
          I/O model that makes it highly scalable and efficient.
        </p>
        <br />
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Express.js:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          Express.js, on the other hand, is a web framework built on top of
          Node.js that provides a set of features for building web applications
          and APIs. It provides a minimalistic and flexible approach to building
          web applications and allows developers to easily handle HTTP requests,
          manage routes, handle middleware, and more.Express.js provides a
          framework built on top of Node.js that simplifies the process of
          building web applications and APIs. Together.Test and debug your
          Express.js application to ensure it works as expected.
        </p>
        <hr />
      </div>
      <div className='mx-2 md:mx-6 my-2 md:my-4 px-0 md:px-4 lg:my-8 py-2 bg-slate-200 border-2 rounded'>
        <h2 className='text-3xl font-serif px-1 md:px-4 lg:px-7 py-2 md:py-4 lg:py-6'>
          4. What is a custom hook, and why will you create a custom hook?
        </h2>
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Custom Hook:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          When multiple components have similar functionality, we can extract
          the common logic into a custom hook and reuse it across those
          components. This can help to reduce code duplication and make the
          codebase easier to maintain.Custom hooks can abstract complex logic
          into a reusable function, making it easier to reason about and test.
          For example, if you have a complex form validation logic, you can
          create a custom hook to manage it.
        </p>
        <br />
        <h4 className='px-2 md:px-6 lg:px-10 text-xl text-amber-400'>
          Controlled components:
        </h4>
        <p className='px-3 md:px-8 lg:px-12 text-slate-900'>
          Controlled components, on the other hand, are those where the value of
          the form elements is controlled by React. In other words, React
          maintains the state of the component and updates the value of the form
          element every time the state changes. A controlled component allows us
          to manage the form state with React, giving more control to the
          developer over the form data.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Blog;