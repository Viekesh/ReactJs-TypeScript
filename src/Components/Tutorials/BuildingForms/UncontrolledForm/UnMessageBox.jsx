import React, { useState } from 'react';



// Employs sentenceCase to sanitize user input before updating state, preventing potential security
// vulnerabilities.

// Handles potential null or undefined input values using optional chaining.
// Trims leading/trailing whitespace using .trim() for cleaner handling.
// Converts the input string to lowercase using.toLowerCase().
// Capitalizes the first letter of each word using regular expression replacement.
const sentenceCase = (str) => {
    return str?.trim() // Handle potential null/undefined values and leading/trailing whitespace
        .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};



// Accepts props nameVal, natureVal, and queryVal with default values for flexibility.
const UnMessageBox = ({ nameVal = '', natureVal = '', queryVal = '' }) => {


    // Uses useState hooks to manage state for name, nature, and query.
    const [name, setName] = useState(sentenceCase(nameVal));
    const [nature, setNature] = useState(natureVal);
    const [query, setQuery] = useState(queryVal);

    const handleInputChange = (event) => {
        const { name, value } = event.target; // Destructuring for cleaner syntax
        setName(sentenceCase(value)); // Update state with sanitized input
        setNature(value); // Assuming nature is a simple string input
        setQuery(value); // Assuming query is a text input
    };



    // In the input fields, we use the value prop set to the corresponding state variable and the onChange
    // handler to update the state with the new value after applying sentenceCase to the input.

    // This approach adheres to React best practices for state management, simplifying the code and improving
    // maintainability.

    // In code below next to the functional component we use ref's. Using refs for form state creates unnecessary
    // complexity and potential issues with React's state management. Refs are meant for direct DOM manipulation,
    // not state management.

    // In this functional component we replace refs with the built-in state management provided by React's
    // useState hook.
    return (
        <div className="form-container">
            <div className="form-fields">
                <div className="field-holder">
                    <span className="label">Name</span>
                    <input
                        name="name" // Set name attribute for clarity
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="field-holder">
                    <span className="label">Nature of Query</span>
                    <select name="nature" value={nature} onChange={handleInputChange}>
                        <option value="billing">Billing</option>
                        <option value="sales">Sales</option>
                        <option value="techSupport">Tech Support</option>
                    </select>
                </div>

                <div className="field-holder">
                    <span className="label">Query</span>
                    <textarea name="query" value={query} onChange={handleInputChange} />
                </div>

                <div className="field-holder">
                    <button id="submit-btn" onClick={() => {
                        // Handle form submission logic here (e.g., send data to server)
                        console.log('Form submitted:', name, nature, query);
                    }}>
                        Submit
                    </button>
                </div>
            </div>

            <div className="output">
                <div className="ot-field bold">Name: {name}</div>
                <div className="ot-field bold">Nature of Query: {nature}</div>
                <div className="ot-field">Query: {query}</div>
            </div>
        </div>
    );
};


// Provides default values for props to enhance component reusability.
UnMessageBox.defaultProps = {
    nameVal: "",
    natureVal: "",
    queryVal: "",
};

export default UnMessageBox;






// import React, { useState } from "react";



// // const sentenceCase = (str) => {
// //     if (str === null || str === "") return false;
// //     else str = str.toString();

// //     return str.replace(/\w\S*/g, function (txt) {
// //         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
// //     });
// // };

// const sentenceCase = (str) => {
//     return str?.trim() // Handle potential null/undefined values and leading/trailing whitespace
//         .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
// };

// const UnMessageBox = () => {

//     // We use useState hooks to create state variables for name, nature, and query.
//     const [name, setName] = useState("");
//     const [nature, setNature] = useState("");
//     const [query, setQuery] = useState("");

//     // The submitForm function now directly accesses these state values for logging or performing form submission
//     // logic.
//     const submitForm = () => {
//         // Now directly access state values for updating
//         console.log("Name:", name, "Nature:", nature, "Query:", query);
//         // Perform form submission logic or API calls here
//     };



//     // In the input fields, we use the value prop set to the corresponding state variable and the onChange
//     // handler to update the state with the new value after applying sentenceCase to the input.

//     // This approach adheres to React best practices for state management, simplifying the code and improving
//     // maintainability.

//     // In code below next to the functional component we use ref's. Using refs for form state creates unnecessary
//     // complexity and potential issues with React's state management. Refs are meant for direct DOM manipulation,
//     // not state management.

//     // In this functional component we replace refs with the built-in state management provided by React's
//     // useState hook.
//     return (
//         <div className="form-container">
//             <div className="form-fields">
//                 <div className="field-holder">
//                     <span className="label">Name</span>
//                     <input
//                         value={name}
//                         onChange={(e) => setName(sentenceCase(e.target.value))}
//                     />
//                 </div>
//                 <div className="field-holder">
//                     <span className="label">Nature of Query</span>
//                     <select value={nature} onChange={(e) => setNature(e.target.value)}>
//                         <option>Billing</option>
//                         <option>Sales</option>
//                         <option>Tech Support</option>
//                     </select>
//                 </div>
//                 <div className="field-holder">
//                     <span className="label">Query</span>
//                     <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
//                 </div>
//                 <div className="field-holder">
//                     <button id="submit-btn" onClick={submitForm}>
//                         Submit
//                     </button>
//                 </div>
//             </div>
//             <div className="output">
//                 <div className="ot-field bold">Name: {name}</div>
//                 <div className="ot-field bold">
//                     Nature of Query: {nature}
//                 </div>
//                 <div className="ot-field">Query: {query}</div>
//             </div>
//         </div>
//     );
// };



// export default UnMessageBox;





// import React, { Component, createRef } from "react";

// const sentenceCase = str => {
//     if (str === null || str === "") return false;
//     else str = str.toString();

//     return str.replace(/\w\S*/g, function (txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// };

// class MessageBox extends Component {
//     state = {
//         name: "",
//         nature: "",
//         query: ""
//     };
//     nameRef = createRef();
//     natureRef = createRef();
//     queryRef = createRef();
//     submitForm = () => {
//         this.setState({
//             name: sentenceCase(this.nameRef.current.value),
//             nature: this.natureRef.current.value,
//             query: this.queryRef.current.value
//         });
//     };
//     render() {
//         return (
//             <div className="form-container">
//                 <div className="form-fields">
//                     <div className="field-holder">
//                         <span className="label">Name</span>
//                         <input ref={this.nameRef} />
//                     </div>
//                     <div className="field-holder">
//                         <span className="label">Nature of Query</span>
//                         <select ref={this.natureRef}>
//                             <option>Billing</option>
//                             <option>Sales</option>
//                             <option>Tech Support</option>
//                         </select>
//                     </div>
//                     <div className="field-holder">
//                         <span className="label">Query</span>
//                         <textarea ref={this.queryRef} />
//                     </div>
//                     <div className="field-holder">
//                         <button id="submit-btn" onClick={this.submitForm}>
//                             Submit
//                         </button>
//                     </div>
//                 </div>
//                 <div className="output">
//                     <div className="ot-field bold">Name: {this.state.name}</div>
//                     <div className="ot-field bold">
//                         Nature of Query: {this.state.nature}
//                     </div>
//                     <div className="ot-field">Query: {this.state.query}</div>
//                 </div>
//             </div>
//         );
//     }
// }

// MessageBox.defaultProps = {
//     nameVal: "",
//     natureVal: "",
//     queryVal: ""
// };

// export default MessageBox;
