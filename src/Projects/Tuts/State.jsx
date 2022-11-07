import React from 'react'

// const State = () => {
//   return (
//     <div>State</div>
//   )
// }

// export default State;


// State :

// The state is an updatable structure that is used to contain the data or information
// about the component. The change in state over time can happer as a response to user
// action or system event. A component with the state is known as stateful component.
// The state determines the behaviour of the component. They are also responsible for
// making a component dynamic and interactive.

// It can be set by using the "setState()" method and calling the setState method
// triggers the UI updates. A state represents the component local state or information.
// It can be accessed or modified inside the component or by the component directly.
// To set an initial state before any interaction occurs, we need to use the
// "getInitialState()" method.

// For example, if we have five components that need data or information from the state,
// then we need to create one container component that will keep the state for all of them.



// Defining the state :

// To define a state, you have to first declare a default set of values for defining the
// component initial state. To do this in a class component add a class contructor which
// assigns an initial state using "this.state".
// The "this.state" propert can be render inside "render()" method.

// React class component have a built in state object. The state object is where you store
// "property : values" that belongs to the component. when the state object changes the
// component re-renders.



// Creating the state object :

// The state object is initialised in the contructor and in this object we can contain
// one or more properties as we like.

// example 1 :

// class Car extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             brand: "Ford",
//             model: "Mustang",
//             color: "red",
//             year: 1964
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>My {this.state.brand}</h1>
//             </div>
//         )
//     }
// }

// export default Car;


// example 2 :

class Ex2 extends React.Component {
    constructor() {
        super();
        this.state = {displayBio : false}
    }

    render() {
        const bio = this.state.displayBio ? (
            <div>
                <h3>This is a stateful component</h3>
            </div>
        ) : null;

        return (
            <div>
                <h3>Welcome here</h3>
                {bio}
            </div>
        )
    }
}

export default Ex2;