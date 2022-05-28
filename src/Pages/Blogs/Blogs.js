import React from "react";
import Footer from "../Shared/Footer";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-primary mb-3 font-serif">
        Blogs
      </h1>

      <div className="bg-gray-200 border-2 border-primary-focus rounded-lg px-3 py-3">
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
      </div>

      <div className="bg-gray-200 border-2 border-primary-focus rounded-lg px-3 py-3 mt-3">
        {" "}
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
        <li className="text-lg text-justify mb-2">
          <span className=" font-bold"> Server State: </span>
          Data that comes from an external server must be integrated with our UI
          status Server state is a common concept, but can be difficult to
          manage with all our local and global UI conditions as well. There are
          several parts of the state that must be handled when fetching or
          updating data from an external server, including loading and error
          status.
        </li>
        <li className="text-lg text-justify mb-2">
          <span className=" font-bold"> URL State: </span>
          Existing data at our URL, including pathname and query parameters. The
          URL state is often missing as a division of the state, but it is
          important. In many cases, a large part of our application relies on
          accessing the URL state. Imagine creating a blog without being able to
          bring up a post based on its slag or ID located at URL!
        </li>
      </div>
      <div className="bg-gray-200 border-2 border-primary-focus rounded-lg px-3 py-3 mt-3">
        <h3 className="text-center text-3xl font-bold my-3">
          The ways of Prototypical Inheritance working
        </h3>
        <p className="text-xl text-justify mb-2">
          Each object has an internal and hidden property with methods and
          properties known as [[prototype]]. Prototypical inheritance is a
          feature of JavaScript that is used to add methods and features to
          objects. It is a method by which an object can inherit the properties
          and methods of another object. Traditionally, to get and set an
          [[prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          up using __proto__.
        </p>
      </div>
      <div className="bg-gray-200 border-2 border-primary-focus rounded-lg px-3 py-3 mt-3">
        <h3 className="text-center text-3xl font-bold my-3">
          Searching Elements of An Array
        </h3>
        <p className="text-xl text-justify mb-2">
          With ES6 JavaScript added the includes method natively to both the
          Array and String natives. The method returns true or false to indicate
          if the sub-string or element exists. While true or false may provide
          the answer you need, regular expressions can check if a sub-string
          exists with a more detailed answer. Until recently developers would
          need to create their own method using either indexOf or a regular
          expression. That changed in more recent versions of ECMAScript with
          the addition of the JavaScript includes method. `JavaScript includes()
          ECMAScript 6 added the includes method to both the String and Array
          objects natively. This method returns either true or false if the
          target string is contained within the source string or array.
        </p>
      </div>
      <div className="bg-gray-200 border-2 border-primary-focus rounded-lg px-3 py-3 mt-3">
        <h3 className="text-center text-3xl font-bold my-3">
          What is a unit test? Why should write unit tests?
        </h3>
        <p className="text-xl text-justify mb-2">
          <span className=" font-bold"> Unit Test: </span>Unit testing is a
          software development process in which the smallest testable parts of
          an application, called units, are individually and independently
          scrutinized for proper operation. This testing methodology is done
          during the development process by the software developers and
          sometimes QA staff. The main objective of unit testing is to isolate
          written code to test and determine if it works as intended. <br />
          One of the advantages of unit testing is that they isolate a function,
          class, or method and examine only that code. High quality individual
          components make the overall system elastic. Thus, the result is
          reliable code. Unit tests also change the nature of the debugging
          process.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
