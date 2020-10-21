const user = {
  firstName: 'Varius',
  lastName: 'Perez',
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
};

const paused = [
  {
    art: "https://reactjs.org/docs/components-and-props.html",
    name: "Components and Props",
    desc: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.",
    tm: ""
  },
  {
    art: "https://reactjs.org/docs/lists-and-keys.html",
    name: "Lists and Keys",
    desc: "Usually you would render lists inside a component.",
    tm: ""
  },
  {
    art: "https://reactjs.org/docs/state-and-lifecycle.html",
    name: "State and Lifecycle",
    desc: "This page introduces the concept of state and lifecycle in a React component. You can find a detailed component API reference here.",
    tm: "2020.10.20 21:50"
  },
  {
    art: "https://reactjs.org/docs/handling-events.html",
    name: "Handling Events",
    desc: "Handling events with React elements is very similar to handling events on DOM elements.",
    tm: "2020.10.21 18:00"
  },
  {
    art: "https://reactjs.org/docs/conditional-rendering.html",
    name: "Conditional Rendering",
    desc: "In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.",
    tm: "2020.10.21 18:30"
  },
  {
    art: "https://reactjs.org/docs/forms.html",
    name: "Forms",
    desc: "HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.",
    tm: "2020.10.21 19:00"
  },
  {
    art: "https://reactjs.org/docs/lifting-state-up.html",
    name: "Lifting State Up",
    desc: "Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.",
    tm: "2020.10.21 19:30"
  },

]
