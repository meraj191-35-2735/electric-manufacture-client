import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-primary mb-3 font-serif">
        Blogs
      </h1>
      <div>
        <h3 className="text-center text-3xl font-bold mb-3">
          Improving optimize performance in a React application
        </h3>
        <p className="text-xl text-justify mb-2">
          Optimizing application performance is key for developers who are
          conscious of keeping the user experience in an app and keeping them
          positive. A second delay in load time could result in a 7 percent
          reduction in conversions, making it essential for developers to create
          apps with optimized performance.In responsive applications, we ensure
          a very fast UI by default However, as an application grows, developers
          may experience some performance issues. <br /> Five important ways to
          optimize the performance of a responsive application, including
          pre-optimization strategies.They are:
        </p>
        <li className="text-lg text-justify mb-2">
          Keeping component state local where necessary
        </li>
        <li className="text-lg text-justify mb-2">
          Memoizing React components to prevent unnecessary re-renders
        </li>
        <li className="text-lg text-justify mb-2">
          Code-splitting in React using dynamic import()
        </li>
        <li className="text-lg text-justify mb-2">
          Windowing or list virtualization in React
        </li>
        <li className="text-lg text-justify ">Lazy loading images in React</li>

        <h3 className="text-center text-3xl font-bold my-3">
          Different ways to manage a state in a React application
        </h3>
        <p className="text-xl text-justify mb-2">
          There are four main types of state we need to properly manage in our
          React apps:
        </p>
        <li className="text-lg text-justify mb-2">
          <span className=" font-bold"> Local State: </span>
          Local condition is the data that we manage on one or the other
          component. Local states are often manipulated in response using the
          useState hook. <br /> For example, to show or hide a model element, or
          to track form values ​​such as form submission, the local state will
          be required when the form is inactive and the value of the form
          inputs.
        </li>
        <li className="text-lg text-justify mb-2">
          <span className=" font-bold"> Global State: </span>
          The Global State is the data that we manage across multiple elements.
          Global status is essential when we want to receive and update data
          anywhere or at least in multiple components of our app. <br /> A
          common example of a global state is a certified user state. If a user
          logs in to our app, we need to get and change their data across the
          app.
        </li>
      </div>
    </div>
  );
};

export default Blogs;
