import React from 'react';
import Ex2 from './State';
import Car from './State';

// const Tuts = () => {
//     return (
//         <div>Tuts</div>
//     )
// }

// export default Tuts;



// JSX (JavaScript Extension) :

// It is a react extension which allows write javascript code which looks like html
// JSX provides you to write html/xml like structures in the same file where you write
// javascript code



// Components :

// Components are independent and reusable bits of code. They server the same purpose as
// JavaScript functions, but work in isolation and return html
// In react we use functional components and class components



// Functional Components :

// In react the functional components are a way to write components, they dont have their
// own state in this file we use functional component

// const Tuts = () => {
// return (
// <div>Tuts</div>
// )
// }

// It is a simple javascrit arrow function that may or may not receive data as parameters
// We create parameters that take props (properties) as input and returns what should be
// rendered. Functional component is also known as a stateless component because they do
// not hold or manage state



// Class components :

// Class component requires to extend from react and creates a render function that 
// returns a react element. You can pass data from one class to another class component
// You can create a class by defining a class that extend component and has a render function
// Here is the same ex we can used in this file, but here we created using a class 
// component instead

// class Car extends React.Component {
// render() {
// return <h2>This is main component</h2>;
// }
// }

// The class component is also known as stateful component because they can hold or manage
// local state

// Here we created a list of unordered elements, where we will dynamically insert student name
// for every object from the data array
// It is especially helpful when we created a list with a lot of items

class StudentInfo extends React.Component {

    constructor() {
        super();

        // In this component we use contructor function ("contructor()"), this function
        // will be called when the component get initiated. The contructor function is
        // where you initiate the components properties
        // In React, component properties should be kept in an object called state.
        
        // The contructor function is also where you honor the inheritance of the 
        // parent component by including the "super()" statement, which execute the parent
        // component contructor function, and your component has access to all the function
        // of the parent component (parent component = React.Component)

        this.state = {
            data: [
                {
                    "name": "Abhishek"
                },
                {
                    "name": "Saharsh"
                },
                {
                    "name": "Ajay"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {/* <StudentName />
                <ul>
                    <li>{this.state.data.map((item) => <List data={item} /> )}</li>
                </ul> */}
                {/* <Car /> */}
                <Ex2 />
            </div>
        )
    }
}

class StudentName extends React.Component {
    render() {
        return (
            <div>
                <h1>Student Name detail</h1>
            </div>
        )
    }
}

class List extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        )
    }
}

export default StudentInfo;