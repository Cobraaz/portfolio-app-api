const data = {
  portfolios: [
    {
      title: "Job in Netcentric",
      company: "Netcentric",
      companyWebsite: "www.google.com",
      location: "Spain, Barcelona",
      jobTitle: "Engineer",
      description: "Doing something, programing....",
      userId: "google-oauth2|108950773083515445441",
      startDate: "01/01/2014",
      endDate: "01/01/2016",
    },
    {
      title: "Job in Siemens",
      company: "Siemens",
      companyWebsite: "www.google.com",
      location: "Slovakia, Kosice",
      jobTitle: "Software Engineer",
      description: "Responsoble for parsing framework for JSON medical data.",
      userId: "google-oauth2|108950773083515445441",
      startDate: "01/01/2011",
      endDate: "01/01/2013",
    },
    {
      title: "Work in USA",
      company: "WhoKnows",
      companyWebsite: "www.google.com",
      location: "USA, Montana",
      jobTitle: "Housekeeping",
      description: "So much responsibility....Overloaaaaaad",
      userId: "google-oauth2|108950773083515445441",
      startDate: "01/01/2010",
      endDate: "01/01/2011",
    },
  ],
  blogs: [
    {
      title: "Reactjs Vs Angular",
      subTitle: "Where to Start?",
      content:
        "<h1>Reactjs Vs Angular</h1><h2>Where to Start?</h2><p>Before you pick any tool, you need to answer two simple questions: “Is this a good tool per se?” and “Will it work well for my use case?” Neither of them mean anything on their own, so you always need to keep both of them in mind. All right, the questions might not be that simple, so we’ll try to break them down into smaller ones.</p><p><strong>Questions on the tool itself:</strong></p><ul><li>How mature is it and who’s behind it?</li><li>What kind of features does it have?</li><li>What architecture, development paradigms, and patterns does it employ?</li><li>What is the ecosystem around it?</li></ul><p><strong>React</strong></p><p>React is developed and maintained by Facebook and used in their own products, including Instagram and WhatsApp. It has been around for around five years now, so it’s not exactly new. It’s also one of the most popular projects on GitHub, with about 119,000 stars at the time of writing. Sounds good to me.</p><p><strong>Angular</strong></p><p>Angular has been around less then React, but it’s not a new kid on the block. It’s maintained by Google and, as mentioned by Igor Minar, used in more than 600 hundred applications in Google such as Firebase Console, Google Analytics, Google Express, Google Cloud Platform and more.</p><p></p><p><strong>Features</strong></p><p>Like I mentioned earlier, Angular has more features out of the box than React. This can be both a good and a bad thing, depending on how you look at it.</p><p>Both frameworks share some key features in common: components, data binding, and platform-agnostic rendering.</p><p><strong>Angular</strong></p><p>Angular provides a lot of the features required for a modern web application out of the box. Some of the standard features are:</p><ul><li>Dependency injection</li><li>Templates, based on an extended version of HTML</li><li>Routing, provided by <code>@angular/router</code></li><li>Ajax requests using <code>@angular/common/http</code></li><li><code>@angular/forms</code> for building forms</li><li>Component CSS encapsulation</li><li>XSS protection</li><li>Utilities for unit-testing components.</li></ul><p>Some of these features are built-in into the core of the framework and you don’t have an option not to use them. This requires developers to be familiar with features such as dependency injection to build even a small Angular application. Other features such as the HTTP client or forms are completely optional and can be added on an as-needed basis.</p><p><strong>React</strong></p><p>With React, you’re starting off with a more minimalistic approach. If we’re looking at just React, here’s what we have:</p><ul><li>No dependency injection</li><li>Instead of classic templates, it has JSX, an XML-like language built on top of JavaScript</li><li>State management using setState and the Context API.</li><li>XSS protection</li><li>Utilities for unit-testing components.</li></ul><p>Not much. And this can be a good thing. It means that you have the freedom to choose whatever additional libraries to add based on your needs. The bad thing is that you actually have to make those choices yourself. Some of the popular libraries that are often used together with React are:</p><ul><li>React-router for routing</li><li>Fetch (or axios) for HTTP requests</li><li>A wide variety of techniques for CSS encapsulation</li><li>Enzyme for additional unit-testing utilities.</li></ul><p>We’ve found the freedom of choosing your own libraries liberating. This gives us the ability to tailor our stack to particular requirements of each project, and we didn’t find the cost of learning new libraries that high.</p><p></p><h2><strong>Languages, Paradigms, and Patterns</strong></h2><p>Taking a step back from the features of each framework, let’s see what kind higher-level concepts are popular with both frameworks.</p><p><strong>React</strong></p><p>There are several important things that come to mind when thinking about React: JSX, functional components, state management, PropTypes, and Flow.</p><p><strong>JSX</strong></p><p>JSX is a controversial topic for many developers: some enjoy it, and others think that it’s a huge step back. Instead of following a classical approach of separating markup and logic, React decided to combine them within components using an XML-like language that allows you to write markup directly in your JavaScript code.</p><p>While the merits of mixing markup with JavaScript might be debatable, it has an indisputable benefit: static analysis. If you make an error in your JSX markup, the compiler will emit an error instead of continuing in silence. This helps by instantly catching typos and other silly errors.</p><p><strong>Functional Components</strong></p><p>In React you can define components using functions and classes. Functional components are usually pure and provide a clear mapping between in the input props and the rendered output. Functional code is usually less coupled and easier to reuse and test. However, functional components in React have their limitations. For example, they cannot have a state as opposed to the class components. This requires the developers to switch between the two paradigms to make the best of both worlds.</p><p>The situation will change when the hooks proposal is finalized and released. This will allow functional components to have a state and use other features of class components, such as lifecycle hooks. We will then be able to write purely functional React applications.</p><p><strong>State Management</strong></p><p>The concept of state management is important for both frameworks and React has several approaches to offer. Each component can have its own state, so you can use that to create stateful components for holding the state of a part of the application. This is known as the lifting state up pattern. This, however, gets impractical as you need to store global state required in different parts of the application as well as manually pass data around different levels of the component tree. To mitigate this, React 16.3 introduced the Context API that allows you to make data available an all component tree levels without passing it around explicitly. Contexts don’t store the state themselves, they only expose the data, but if you wrap it in a stateful component you can implement a convenient natively supported way to store the state.</p><p></p><p><strong>Angular</strong></p><p>Angular has a few interesting things up its sleeve as well, namely TypeScript, RxJS, and Angular Elements, as well as its own approach to state management.</p><p><strong>TypeScript</strong></p><p>TypeScript is a new language built on top of JavaScript and developed by Microsoft. It’s a superset of JavaScript ES2015 and includes features from newer versions of the language. You can use it instead of Babel to write state of the art JavaScript. It also features an extremely powerful typing system that can statically analyze your code by using a combination of annotations and type inference.</p><p>There’s also a more subtle benefit. TypeScript has been heavily influenced by Java and .NET, so if your developers have a background in one of these languages, they are likely to find TypeScript easier to learn than plain JavaScript (notice how we switched from the tool to your personal environment). Although Angular has been the first major framework to actively adopt TypeScript, it’s also possible to use it together with React.</p>",
      userId: "google-oauth2|108950773083515445441",
      status: "draft",
    },
    {
      title: "When Does a Project Need Reactjs?",
      subTitle: "Is it really required to use Reactjs in project",
      content:
        "<h1>When Does a Project Need Reactjs?</h1><h2>Is it really required to use Reactjs in project</h2><p>You know when a project needs HTML and CSS, because it’s all of them. When you reach for JavaScript is fairly clear: when you need interactivity or some functionality that only JavaScript can provide. It used to be fairly clear when we reached for libraries. We reached for jQuery to help us simplify working with the DOM, Ajax, and handle cross-browser issues with JavaScript. We reached for underscore to give us helper functions that the JavaScript alone didn’t have.</p><p></p><p><strong>Because there is lots of state.</strong></p><ul><li>Which navigation item is active</li><li>Whether a button is disabled or not</li><li>The value of an input</li><li>Which accordion sections are expanded</li><li>When an area is loading</li><li>The user that is logged in and the team they belong to</li><li>Whether the thing the user is working on is published, or a draft</li></ul><p>“Business logic”-type stuff that we regularly deal with. State can also be straight up content:</p><ul><li>All the comments on an article and the bits and bobs that make them up</li><li>The currently viewed article and all its metadata</li><li>An array of related articles and the metadata for those</li><li>A list of authors</li><li>An an activity log of recent actions a user has taken</li></ul><p></p><p>React doesn’t help you organize that state, it just says: I know you need to deal with state, so let’s just call it state and have programmatic ways to set and get that state.</p><p></p><p><strong>React kinda tells us:</strong></p><ol><li>Let’s start thinking about all that stuff as state.</li><li>I’ll do ya one better: state is a chunk of JSON, so it’s easy to work with and probably works nicely with your back end.</li><li>And one more even better: You build your HTML using bits of that state, and you won’t have to deal with the DOM directly at all, I’ll handle all that for you (and likely do a better/faster job than you would have.</li></ol><p><strong>Lots of DOM management.</strong></p><p>Manually handling the DOM is probably the biggest cause of spaghetti code.</p><ul><li>Inject HTML over here!</li><li>Rip something out over here!</li><li>Watch this area for this event!</li><li>Bind a new event over here!</li><li>New incoming content! Inject again! Make sure it has the right event bindings!</li></ul><p>All these things can happen any time from anywhere in an app that’s gone spaghetti. Real organization has been given up and it’s back to the DOM as the source of truth. It’s hard to know exactly what’s going on for any given element, so everybody just asks the DOM, does what they need to do, and crosses their fingers it doesn’t mess with somebody else.</p><p>React says: you don’t get to deal with the DOM directly. I have a virtual DOM and I deal with that. Events are bound directly to the elements, and if you need it to do something above and beyond something directly handle-able in this module, you can kind of ceremoniously call things in higher order modules, but that way, the breadcrumb trail can be followed.</p><p>Complicated DOM management is another thing. Imagine a chat app. New chat messages might appear because a real time database has new data from other chatters and some new messages have arrives. Or you’ve typed a new message yourself! Or the page is loading for the first time and old messages are being pulled from a local data store so you have something to see right away. Here’s a Twitter thread that drives that home.</p><p></p>",
      userId: "google-oauth2|108950773083515445441",
      status: "draft",
    },
  ],
  projects: [
    {
      header: "MERN",
      img: "https://i.ibb.co/fxLVF2B/Devconnector-Homescreen.png",
      title: "DevConnector",
      description:
        "This app is for developers to add their profile with experience and education, post , comments. This app is designed with MERN stack",
      github: "https://github.com/Cobraaz/Developer-connector-Reactjs-Nodejs",
      link: "https://devs-connectors.herokuapp.com/",
      userId: "google-oauth2|108950773083515445441",
    },
    {
      header: "MERN",
      img: "https://i.ibb.co/QX1Vjj2/DAshboard.png",
      title: "Instagram Clone",
      description:
        "Social network for Users to make profile, share post, likes post, comment on post and many more stuff.",
      github: "https://github.com/Cobraaz/instagram-clone",
      link: "https://instagram-clone007.herokuapp.com/",
      userId: "google-oauth2|108950773083515445441",
    },
    {
      header: "Reactjs & firebase",
      img:
        "https://res.cloudinary.com/cobraaz/image/upload/v1596526366/Screenshot_11_cpsmes.png",
      title: "CrwnClothing",
      description: "crwn clothing using React & firebase",
      github: "https://github.com/Cobraaz/crwn-clothing",
      link: "https://crwnn-clothing.herokuapp.com/",
      userId: "google-oauth2|108950773083515445441",
    },
    {
      header: "Reactjs",
      img:
        "https://res.cloudinary.com/cobraaz/image/upload/v1596527044/corona_tracker_dhzsat.png",
      title: "Corona Tracker",
      description: "This is small project on corona tracker",
      github: "https://github.com/Cobraaz/corona-tracker",
      link: "https://corona-trackerr.herokuapp.com/",
      userId: "google-oauth2|108950773083515445441",
    },
    {
      header: "MERN",
      img:
        "https://res.cloudinary.com/cobraaz/image/upload/v1596526366/Screenshot_12_u2hgak.png",
      title: "Smart Brain",
      description: "This app is used to recognize faces in the picture",
      github: "https://github.com/Cobraaz/smart-brain",
      link: "https://smart-brain-facerrecognition.herokuapp.com/",
      userId: "google-oauth2|108950773083515445441",
    },
    {
      header: "React.js & Node.js",
      img:
        "https://res.cloudinary.com/cobraaz/image/upload/v1596526364/Screenshot_13_r5zhly.png",
      title: "Realtime Chat Application",
      description: "This project uses socket.io, reactjs, node",
      github: "https://github.com/Cobraaz/chat-application",
      userId: "google-oauth2|108950773083515445441",
    },
    {
      header: "Python & Django",
      img:
        "https://res.cloudinary.com/cobraaz/image/upload/v1596526364/Screenshot_14_x4brce.png",
      title: "Password Checker",
      description: "To check how many times your password is Hacked",
      github: "https://github.com/Cobraaz/pwned_password_Django",
      link: "https://murmuring-tundra-59094.herokuapp.com/",
      userId: "google-oauth2|108950773083515445441",
    },
  ],
};

module.exports = data;
