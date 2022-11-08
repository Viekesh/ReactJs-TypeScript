import React from 'react';

// const State = () => {
//   return (
//     <div>State</div>
//   )
// }

// export default State;


// State :

// The state is an updatable structure that is used to contain the data or information
// about the component. The change in state over time can happen as a response to user
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
// assigns an initial state using "this.state.propertyName" syntax.
// The "this.state.propertyName" property can be render inside "render()" method.

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

// class Ex2 extends React.Component {
//     constructor() {
//         super();
//         this.state = {displayBio : false}
//     }

//     render() {
//         const bio = this.state.displayBio ? (
//             <div>
//                 <h3>This is a stateful component</h3>
//             </div>
//         ) : null;

//         return (
//             <div>
//                 <h3>Welcome here</h3>
//                 {bio}
//             </div>
//         )
//     }
// }

// export default Ex2;



// Using the state object : 

class CarEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    brand: "Toyota",
                    model: "Unkonwn",
                    color: "red",
                    year: "Unknown"
                },
                // {
                //     brand: "TATA",
                //     model: "Unknown",
                //     color: "red",
                //     year: "Unknown"
                // },
                // {
                //     brand: "Harley Davidson",
                //     model: "Unknown",
                //     color: "red",
                //     year: "Unknown"
                // }
            ]
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.state.data.map((item) => <CarList data={item} />)}</li>
                </ul>

                <ChangeState />
            </div>
        )
    }
}

class CarList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.data.brand}</li>
                </ul>
                <ul>
                    <li>{this.props.data.color}</li>
                </ul>
            </div>
        )
    }
}


export default CarEx;


class ChangeState extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log('Component this', this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                <h1>Welcome to JavaTpoint!!</h1>
                {
                    this.state.displayBio ? (
                        <div>
                            <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>
                            <button onClick={this.toggleDisplayBio}> Show Less </button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}> Read More </button>
                        </div>
                    )
                }
            </div>
        )
    }
}  