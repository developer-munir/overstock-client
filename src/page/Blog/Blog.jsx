import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl uppercase my-6 text-center border-b">blogs</h1>
      <div className="my-4">
        <h1>
          * What are the different ways to manage a state in a React
          application?
        </h1>
        <p className="text-zinc-500 text-sm px-4">
          State management. The frontend “knows” a lot of things, and these
          things interact with each other in non-trivial ways. So in my view,
          state management is the core problem when developing a UI. Here are
          some things I wish I knew about state management earlier.
          <br />
          #1 - State management is how you mitigate prop drilling. To build a
          non-trivial React application, you need to consider state management.
          You don’t need to use a third party library: you can use Context. But
          you do need to figure out how to store global state that can be
          accessed anywhere in your application. Example: dark mode support Say
          your app has a dark mode. All your rendered components must know what
          theme is on, so they can render the UI in the right color. Other
          examples of global UI state include whether the user is logged in, the
          logged in individual’s username, and the value of the global search
          box. Prop drilling isn’t the answer Context didn’t exist when I
          started learning React, so to solve this problem, I prop drilled. As
          your app gets larger, prop drilling becomes impractical. State
          management is the answer What you need to do is store your theme
          setting in a Redux or MobX store, or in a plain JavaScript object, and
          pass it to all your components using Context. I had no idea state
          management was the solution to the prop drilling problem until I
          learned about Redux, out of curiosity. To make things worse, many
          articles say you can build non-trivial web apps without state
          management, which initially deterred me from even learning about it.
          <br />
          #2 - State management is how you update your page after
          creating/updating data, without a refresh. The problem Say you’re
          writing a to-do app. After the user creates or renames a to-do item,
          you’d like to update only the to-do list component — but not refresh
          the page. How do you do this? The solution The solution is to store
          the list of to-do items in a global store in the client, along with a
          method for re-fetching the list of to-do items from the server and
          updating our store. Then, your to-do list component reads the list of
          to-do items from your global store. After the user creates or updates
          a to-do item, call the method for re-fetching the list of to-dos,
          which updates your global store and updates your component. I think of
          the list of to-do items on the client as a client-side cache: a subset
          of the data on the server.
          <br /> #3 - Manage your state by storing it in the right places Don’t
          just put all your application state into whatever state management
          library you choose. Instead, recognize that your application has
          several different kinds of state. I’m inspired by James Nelson’s post
          on this topic. Data + loading state is the list of to-do items your
          frontend renders and shows whether the list is loading. Put this into
          Redux/MobX/etc. Global UI state refers to whether the user is logged
          in, value of a global search bar. The server doesn’t store this data
          at all. Use Redux/MobX/etc. Local UI state is a dropdown which has
          expanded, for example. The rest of your frontend doesn’t care about
          this. Use component state. Form state is the values of fields in a
          form and is a subset of the local UI state. Use a library like Formik
          to treat the form as a controlled component. URL state is the route
          the user is on at the moment. Read and update window.location; don’t
          create a second source of truth. Page state is where you have a page
          in which components interact with each other in a complex way, but not
          with components on other pages. Create a Redux/MobX store just for the
          page (or pass down a plain JS object with Context)
          <br /> #4 - Learn other state management libraries in addition to just
          Redux Redux is probably good enough for your application, but I didn’t
          like using it. Why do I need to worry about normalizing the data from
          my server on my client? Why do libraries like Redux ORM need to exist?
          I don’t want to re-implement a bunch of my server-side code on the
          client. Why do I need to touch multiple files and write a lot of
          boilerplate code in order to add a simple feature? What is an
          action/action type/action creator/reducer/store again? I understand
          the benefits of writing immutable, functional code, but writing Redux
          reducers feels needlessly unintuitive. I’d like to simply make an API
          call in an action and update my Redux store without learning and using
          Thunk or Saga. Switching to MobX Then I learned MobX. Each store is
          just a plain JavaScript class. There’s no boilerplate. Each piece of
          state in a store is just a class variable. Actions are just methods in
          the class with an @action decorator. You can make API calls in your
          actions just like you normally would; wrap the code that updates your
          state after the call with runInAction. It supports observability,
          which I don’t use much myself, but is a useful tool. Find the right
          library for you MobX may not be the solution for you. It may be
          apollo-link-state, unstated, xstate, or a home-brewn solution using
          Context. Keep learning different libraries until you find one that
          fits your requirements.
          <br /> #5 - Your React app has two layers State and view layer. I
          think of a React app as having two layers: A JavaScript object, also
          known as your state, and methods that update it. React code, the view
          layer, which turns that JavaScript object into Document Object Model
          (DOM) elements. This is what people mean when they say “UI is a
          function of state” and “React is just a view layer.” By embracing this
          paradigm, you can write testable, functional code, decoupled from your
          UI, for managing your state. And your UI becomes easy to write. You
          have a JavaScript object with all the data your UI needs, structured
          in the way your UI wants it, with methods for updating this JSON
          object. Write your components easily with this “API”. Keep in mind
          that not all state management libraries store state internally as a
          JavaScript object, but this is the way I like to think about it. Of
          course, in practice, not all your state should be in your global
          state, as I write above. #6 - Shared vs non-shared components When I
          first started writing with React, I put my data fetching code in my
          components. But this meant I couldn’t use a component in another place
          for its UI only. Fetching data in my container components. Then, I
          read Dan Abramov’s article on presentational vs container components.
          At first, I put my data fetching code in my container components, each
          of which rendered a presentational component. But I realized I needed
          to put my data fetching code in MobX in order to update the UI after
          creates and updates (see #2). Fetching data in MobX actions. Next, I
          put my data fetching code into MobX actions. Each container component
          connected to my MobX store and rendered a presentational component,
          passing data and methods from my MobX store as props as needed.
          Unfortunately, this forced me to write a lot of boilerplate container
          components that effectively did nothing. I concluded that the right
          distinction is shared vs non-shared components. Shared: Components
          you’ll need to render in more in than one place in your app and which
          can be either presentational or container. Examples: UserSelect,
          Button Non-shared: Components you’ll only render in one place.
          <br />
          <br />
          Examples: UserTable, GlobalSearchInput The presentational vs container
          component distinction assumes that you want to re-use presentational
          components, but not container components. I disagree. You usually want
          to re-use some presentational components and not others, and you want
          to re-use some container components and not others. This really just
          scratches the surface of what’s possible in React. Using some of these
          approaches can help manage the state of the world’s most complex user
          interfaces, and it’s how we do it at OpsRamp. Because, at the end of
          the day, even if we’re not as complex as a Facebook or Palantir, we
          want the end-user experience to be just as seamless, smooth, and
          satisfying.
        </p>
      </div>
      <div className="my-4">
        <h1>* How does prototypical inheritance work?</h1>
        <p className="text-zinc-500 text-sm px-4">
          In this article, we will try to understand the facts that are required
          to effectively understand what exactly Prototype Inheritance in
          JavaScript means or what does it actually implies with the help of
          several examples of approaches. <br />
          Let’s understand the basics behind Prototype Inheritance in
          JavaScript. Prototype Inheritance in JavaScript: Following bullet
          points will try to analyze the basics behind Prototype Inheritance in
          JavaScript- Under the classical inheritance phenomenon, we create a
          new class that actually extends or reuses the properties or functions,
          or methods of another class that are used by several programming
          languages (like C, C++, Java, etc.) JavaScript doesn’t use classical
          inheritance instead it uses the phenomenon called Prototype
          Inheritance. In Prototype Inheritance, an object uses the properties
          or methods of another object via the prototype linkage.
          <br /> All the JavaScript objects inherit properties and methods from
          a prototype (like Date objects inherit properties from Date.prototype
          and so on). Following pictorial representation, containing some sample
          values will help us to understand Prototype Inheritance in a much
          better and effective way- In the above pictorial representation, we
          have taken an example to illustrate the Prototype Inheritance between
          a rabbit and another create prototype object which is an animal. We
          will set the rabbit’s prototype object as an animal prototype object
          wherein we will store all the values of rabbit for a purpose that if
          in the case in while rabbit properties are missing then JavaScript
          will automatically take it from animal prototype object. Now that you
          have understood a brief detailed description of the Prototype
          inheritance let us see and understand Prototype Inheritance with
          several following approaches- <br /> Approach 1: In this approach we
          will use __proto__, which is the special name for the internal and
          hidden prototype called [[Prototype]]. We will store all the
          properties of the rabbit in the animal prototype object and thereafter
          we may access it whenever it is required. This __proto__ is a bit old
          as well as an outdated approach that exists for some historical
          reasons associated with JavaScript.
        </p>
      </div>
      <div className="my-4">
        <h1>* What is a unit test? Why should we write unit tests?</h1>
        <p className="text-zinc-500 text-sm px-4">
          Unit testing still causes controversy among developers and product
          managers. There are both opponents and supporters of this kind of
          testing. In this article, I’ll highlight the main advantages of unit
          testing. <br />
          What are unit tests, why unit testing is important, and how it they
          help developers and business owners? For the answers to these
          questions and more, read on. <br /> Let’s start with the definition:
          Unit testing is a software testing method where “units”—the individual
          components of software—are tested. Developers write unit tests for
          their code to make sure that the code works correctly. This helps to
          detect and protect against bugs in the future.
          <br />
          Sometimes developers write unit tests first, then write the code. This
          approach is also known as test-driven development (TDD). In TDD,
          requirements are turned into specific test cases, then the software is
          improved to pass the new tests. In this approach, no code is added
          that hasn’t been proven to meet defined requirements. Unit testing is
          similar, in that it allows developers to modify code without affecting
          the functionality of other units or the product, as a whole. <br />
          Unit tests are usually written in the form of functions and check the
          value and behavior of these functions in various scenarios. For
          example, let’s imagine a function for the division of two numbers: the
          developer decides to follow the TDD approach, first writing a test
          with the input of values ‘4’ and ‘2’ (4 divided by 2) with ‘2’
          expected as the result. Another example: when the divisor is zero, we
          don’t expect that the function will produce a value—we expect that it
          will generate an exception. We can expect that the function will
          notify some component about an attempt to divide by zero. Thus, we
          test two cases: In an invalid situation, the function will notify us
          that we are doing something wrong (an exceptional situation) The
          function will identify this invalid situation and log it.
          <br />
          EIGHT ADVANTAGES OF UNIT TESTING Some developers underestimate the
          importance of writing unit tests. What follows are five benefits of
          unit testing that you may want to consider before forming your own
          opinion.
          <br />
          Any bugs are found easily and quicker Code covered with tests is more
          reliable than the code without. If a future change breaks something in
          the code, developers will be able to identify the root of the problem
          right away rather than coming through an unwieldy codebase to find the
          issue. Best practices suggest that developers first run all unit tests
          or a group of tests locally to make sure any coding changes don’t
          disrupt the existing code. However, consider the human factor: A
          developer might forget to run unit tests after making changes and
          submit potentially non-working code to a common branch. To avoid this,
          many companies apply a continuous development approach. Tools for
          continuous integration are used for this, allowing developers to run
          unit tests automatically. Thus, any unwanted changes in the code will
          be detected by a cold, logical machine. <br />
          The speed of detecting non-working code depends on the tools used for
          continuous integration. Tests can be set to run either a one-time
          check at a certain time interval or can be run immediately in
          real-time to review changes. In short, unit tests help developers
          detect problems immediately, then fix them quickly. With fewer
          resources spent finding bugs, teams can move on to the next phase of a
          project.
          <br />
          Unit testing saves time and money In his book, “Code Complete,” Steve
          McConnell shares a table with bugs and the cost of fixing them at
          different stages of the product lifecycle. The table shows that the
          earlier a defect is detected, the lower the cost of its correction.
          When unit tests are written, many bugs are found at the software
          construction stage, which prevents the transition of these bugs to the
          following stages, including after the release of the product. This
          saves the costs of fixing the bugs later in the development lifecycle
          and also brings benefits to end-users, who don’t have to deal with a
          buggy product. Also, you will greatly benefit from improved test time
          estimation, saving lots of time and resources.
          <br />
        </p>
      </div>
      <div className="my-4">
        <h1>* React vs. Angular vs. Vue?</h1>
        <p className="text-zinc-500 text-sm px-4">
          React
          <br /> React is the JavaScript library of User Interfaces. It is build
          single-page applications and also allows you to create reusable UI
          components. It is a front-end JavaScript framework, created by
          Facebook in 2011. The initial version (V0.3.0) was released in July
          2013. The latest version is V5.0.1. It has a size of 31.8K. This
          complete guide on How To Learn ReactJS: A Complete Guide For Beginners
          will help in making your transition towards React if you’re a
          beginner. <br />
          Popularity – React has gained a lot of popularity in recent years and
          is considered one of the best frameworks for web development. There
          are more developers who keep React as a priority for creating
          wonderful websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and
          The New York Times use React for their front-end development. <br />
          Architecture – It does not follow any specific pattern, developers
          have the freedom to choose any design pattern. It begins with a single
          root component. Each can be nested with another component. It can also
          include third-party components such as state management routing,
          animation, etc for specific purposes. Here, the components are the
          large building block that defines reusable items used through the
          application. <br /> Ecosystem – React has excellent open-source
          packages that could be used for developing applications. Front-end
          applications rely on global state management (Redux) used to store
          information. Also, React has React Native which allows you to build
          native iOS and Android applications. React uses JavaScript which acts
          as a powerpack for the whole new application. It combines UI templates
          and JavaScript logic called JSX which is the scripting language for
          React. <br />
          Features – React follows the “Learn Once, Write Anywhere” feature
          which helps developers to integrate new features without the need of
          rewriting the existing code. It also has declarative views for each
          state which will efficiently update and render the components as per
          the change in data. It has virtual DOM (Document Object Model defines
          how the document is accessed and manipulated) which helps in updating
          the changes made by the developer quickly to the website keeping rest
          of the other things the same. Now, with all this information, if you
          are sure to move to React, React JS (Basic to Advanced) – Self-Paced
          will guide you through the theoretical knowledge along with having
          practical hands-on.
          <br />
          <br />
          Angular
          <br />
          Angular, developed by Google, was released in the year 2010. It is a
          TypeScript-based framework that uses a regular DOM. Angular provides a
          set of tools using which a complex, reactive UI can be built. It is
          primarily aimed at creating SPAs (Single Page Applications) and
          performs various operations such as routing, state management, PWA,
          testing, and building, having a size of 143K. <br />
          Popularity – Angular is used by Google, Upwork, and MS Office and
          since this framework was implemented before React, it is more popular
          providing a highly functional framework to create larger applications.{" "}
          <br />
          Architecture – Angular follows MVC (Model-View-Controller)
          architecture, also you don’t have restrictions in following only MVC
          architecture. Since Angular is also component-based, you can choose
          any design pattern. The Angular framework contains modules, templates,
          services, and components in the architecture which follows several
          operations while implementing an application. <br />
          Ecosystem – Angular also performs state management, inspired by Redux
          in React. You can build cross-platform mobile applications using
          NativeScript. The technology MEAN is based on Angular which is the
          trendy one these days, used mostly by developers. Angular material
          fills all the needs of UI and helps developers in building an
          aesthetic, consistent, and fully functional UI. It uses templates with
          Angular directives. <br /> Features – The new version of Angular8
          comes with immense features such as it supports cross-platform,
          two-way data binding, a set of directives, declarative UI, a real DOM,
          CLI (Command Line Interface), and many more. <br /> Vue <br />
          Vue was developed by a former Google employee and was released in the
          year 2014. It was developed to make the best version of Angular and
          make a custom tool. It is used for developing single-page engaging and
          high-quality web applications. It lets you extend directives (HTML
          with HTML attributes), and also provides built-in directives and
          user-defined directives. It is the lightest framework having a size of
          23K. <br />
          Popularity – Vue has become so popular these days and it is one of the
          hottest topics in terms of technology. Companies that use Vue as their
          front-end development framework are UpWork, Netflix, and Nintendo. It
          has a good rating on GitHub making it so popular. <br />
          Architecture – Vue is called a progressive framework where you can
          extend functionality using third-party packages. It follows the MVVM
          (Model View ViewModel) pattern but is also not strictly linked to it.
          It also has SFCs (Single File Components) which can be transpiled into
          JS code using tools like Webpack. <br /> Ecosystem – Vue comes with
          various libraries used for creating a full-fledged UI. Vuex is the
          state management library for Vue applications. To speed up your
          development, it has input components and advanced elements. It has a
          brilliant feature of integrating with Laravel. It can play a role of a
          library and a framework both depending on the project’s requirement.
          It uses HTML-based template syntax. <br />
          Features – Several features of Vue include two-way data binding for
          HTML interface manipulation, virtual DOM to update the changes made in
          the website quickly, custom directives for managing data changes,
          components for reusing codes, and transitions that provides methods
          when a UI element is removed or inserted in the DOM. <br />
          React, Angular, or Vue, all of these frameworks are based purely on
          JavaScript thus, they’re not dependent on any third-party tools. Each
          framework has unique features that can be used by developers whenever
          required. So, instead of giving a conclusion on going for one
          framework, it totally depends on you which framework you want to go
          for. Use the right framework based on the requirement of the project.
        </p>
      </div>
    </div>
  );
};

export default Blog;
