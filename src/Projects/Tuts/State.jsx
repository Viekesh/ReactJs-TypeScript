import React, { Component } from 'react';

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

// A state represents the component local state or information.
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



// Ex 1 :

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



// Ex 2 :

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



// Ex 3 :

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome Here"
        };
    }

    changeMessage = () => {

        // to change the state of the component we need to call "setState" method

        this.setState({
            message: "Thank You"
        });

        // "setState()" method accept an object which is nothing but a new state of the
        // component. In the new state we need that message which we want change "Thank You"
    }

    render() {
        return (
            <div>
                {/* <h1>{this.state.message}</h1>
                <button
                    onClick={() => this.changeMessage()}
                >Subscribe</button> */}

                <Counter />

            </div>

            // Here we can see the message "Welcome Here"
            // Our requirement is that when we click on the button which is just below the
            // heading the text is change to something else
            // Now if parent component send the message as a property it cannot be change
            // after or during sending the props
            // so the solution is to use the "state"
            // Now the first step is that create the state object and initialise it
            // this step is done inside the class contructor
            // right below the contructor we use "super()" method
            // this is important because we extend react component class and a call has to be
            // made to the base class contructor then we create our state object
            // dont forget to use "this" keyword in react, when you declare "this.state"
            // react understand your intention
            // Another step is initialise property
            // next step is bind "this.state" value in the render function "{this.state.message}"
            // final step is that apply the click event on ths button and change the message
        )
    }
}

export default Message;



// Ex 4 :

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // Here we can initialise "this.state" which is an object and the state object has a
    // property called count initialised to zero

    // Now lets define the increment method

    increment = () => {

        // Here basically we can increment the value by one or try to fetch the current value
        // of count, incremented by one and reasign that value

        // this.state.count = this.state.count + 1;
        // console.log(this.state.count);

        // Now you can see when click on the button the value is incremented by one in the console
        // but not in the UI. In our UI "count" is not re-rendering whenever the "state" is changing and
        // this is the main reason we should never modify our "state" directly, the only place we
        // can assign "this.state" is the contructor.
        // Any other time to change the state the "setState()" method has to be used
        // So lets now we can use "setState()" method to change the "state" of our component.

        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log("Callback value is : ", this.state.count)
        //     }
        // );

        this.setState((previousState) => ({
            count : previousState.count + 1
        }))

        console.log(this.state.count);

        // Now click the button on the UI you see that the value of count is increment by one
        // So the first dos and don't is never modify the state directly instead make use of "setState()"
        // When you modify the "state" directly "react" is not modify the component
        // Here we have one detail is available in a "setState()" method, you can see UI when you click
        // on the button the value is incremented by one on our UI but not in the console immediately
        // it is incremented on the console. The value on the console is less than one of the incremented
        // value on our UI, this is because the calls to "setState()" is asynchronous
        // So what can happened on console?
        // Over here "console.log" is being called before the "state" is actually set
        // Many times in your application you might execute to some code only after the state has been
        // updated to handle such situation you can pass a callback function as the second parameter to
        // the "setState()" method
        // The "setState()" method has two parameters, the first parameter is the "state" object and
        // the second parameter is the callback function, the callback function is the arrow function
        
        // If you go back to te code 0 is the synchronous console.log value and 1 is the callback
        // function console.log statement

        // So this is brings us to the second dos and don't whenever you need to execute the code after
        // the state has been changed, then do not place that code right after the "setState()"
        // method instead place that code in the callback function that is passed as second parameter
        // to the "setState()" method

        // lets take a look at next scenario when we try to use the current state to calculate the
        // new state value the code is working as expected we dont see any problem the increment is
        // working fine now that is simply because the current scenario is pretty simple, Now make
        // the scenario pretty complicated
        
    }

    // Here we are creating new method called increment 5 and within the body simply call
    // the increment method

    increment5 = () => {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    // Here when we click on the button the value is changes to one instead of changing
    // to 5 and in the console strangly zero is console.log 5 times and even the callback value
    // of one is logged 5 times why this should happen?

    // this behavior is beacause the react will group multiple "setState()" calls into a
    // single update for better performance so what happens in our scenario is that
    // all the "setState()" calls are done in one single go and the updated value does
    // not carry over between the different calls so whenever you have update the state based
    // on the previous state we need to paas a function as an argument to "setState()" method
    // instead of passing in an object

    // It is very important you make note of this difference we are not using the current
    // state instead we are always using the previous state this is going to give us the right
    // results

    // Now go to the browser and display the result by clicking on the increment5 event button

    // the second parameter of the "setState()" method is "props". Here you can go with
    // the function parameter approach (for ex : props.something) and make use of props


    // Summarize :

    // always make use of "setState()" method and never modify the state directly
    // second if certain code is executed after the state has been updated place that code
    // in the callback function which is the second argument to the "setState()" method
    // third point is that when you update the state on the previous state value, passing a
    // function as an argument instead of regular object

    // So this is about "setState()" method in react



    render() {
        return (
            <div>
                Count = {this.state.count}
                <button
                    type='button'
                    onClick={() => this.increment5()}
                >Increment</button>
            </div>

            // Here we can count the "state" to keep track of the counter value and we initialise
            // the state in the contructor
            // Next we bind the state value in the curly brackets
            // Next add the button to increment the count value
        )
    }
}



// Using the state object :

// class CarEx extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 {
//                     brand: "Toyota",
//                     model: "Unkonwn",
//                     color: "red",
//                     year: "Unknown"
//                 },
//                 {
//                     brand: "TATA",
//                     model: "Unknown",
//                     color: "red",
//                     year: "Unknown"
//                 },
//                 {
//                     brand: "Harley Davidson",
//                     model: "Unknown",
//                     color: "red",
//                     year: "Unknown"
//                 }
//             ]
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li>{this.state.data.map((item) => <CarList data={item} />)}</li>
//                 </ul>

//                 <ChangeState />
//             </div>
//         )
//     }
// }

// class CarList extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li>{this.props.data.brand}</li>
//                 </ul>
//                 <ul>
//                     <li>{this.props.data.color}</li>
//                 </ul>
//             </div>
//         )
//     }
// }


// export default CarEx;



// Change State :

// We can change our state by using the "setState()" method and calling the setState
// method triggers the UI updates.


// class ChangeState extends React.Component {
//     constructor() {
//         super();
//         this.state = { displayBio: false };
//         console.log('Component this', this);
//         this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
//     }

//     toggleDisplayBio() {
//         this.setState({ displayBio: !this.state.displayBio });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Welcome to JavaTpoint!!</h1>
//                 {
//                     this.state.displayBio ? (
//                         <div>
//                             <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>
//                             <button onClick={this.toggleDisplayBio}> Show Less </button>
//                         </div>
//                     ) : (
//                         <div>
//                             <button onClick={this.toggleDisplayBio}> Read More </button>
//                         </div>
//                     )
//                 }
//             </div>
//         )
//     }
// }


