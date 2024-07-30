// import { useState } from "react";



// const sentenceCase = (str) => {

//     // if (str === null || str === "") return false;
//     // else str = str.toString();

//     // return str.replace(/\w\S*/g, function (txt) {
//     //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     // });

//     return str !== null && str !== ''
//         ? str.toString().replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
//         : '';

// };



// const MessageBox = ({ nameVal, natureVal, queryVal }) => {

//     const [name, setName] = useState(nameVal);
//     const [nature, setNature] = useState(natureVal);
//     const [query, setQuery] = useState(queryVal);

//     return (
//         <div className="form_container">
//             <div className="form_fields">

//                 <div className="field_holder">
//                     <span className="label">Name</span>
//                     <input
//                         value={name}
//                         onChange={evt => setName(sentenceCase(evt.target.value))}
//                     />
//                 </div>

//                 <div className="field_holder">
//                     <span className="label">Nature of Query</span>
//                     <select value={nature} onChange={evt => setNature(evt.target.value)}>
//                         <option>Billing</option>
//                         <option>Sales</option>
//                         <option>Tech Support</option>
//                     </select>
//                 </div>

//                 <div className="field-holder">
//                     <span className="label">Query</span>
//                     <textarea
//                         value={query}
//                         onChange={evt => setQuery(evt.target.value)}
//                     />
//                 </div>

//             </div>

//             <div className="output">
//                 <div className="ot-field bold">Name: {name}</div>
//                 <div className="ot-field bold">Nature of Query: {nature}</div>
//                 <div className="ot-field">Query: {query}</div>
//             </div>

//         </div>
//     );
// };



// MessageBox.defaultProps = {
//     nameVal: "",
//     natureVal: "",
//     queryVal: ""
// };



// export default MessageBox;









// import { useState } from 'react';



// const sentenceCase = (str) => {

//     // Handle potential null/undefined values and leading/trailing whitespace
//     // The sentenceCase function is included for demonstration purposes. It capitalizes the first letter of each
//     // word and converts the rest to lowercase.You can remove it if sentence casing isn't needed.
//     return str?.trim()
//         .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// };



// // The functional component MessageBox receives props for initial values (nameVal, natureVal, queryVal). Defaults
// // are provided using destructuring assignment.

// const MessageBox = ({ nameVal = '', natureVal = '', queryVal = '' }) => {

//     // State variables are created using useState for name, nature, and query, initialized with the corresponding
//     // props.
//     const [name, setName] = useState(sentenceCase(nameVal));
//     const [nature, setNature] = useState(natureVal);
//     const [query, setQuery] = useState(queryVal);


//     // Handles changes in the name input field. It extracts the value from the event object, optionally applies
//     // sentence casing using sentenceCase, and updates the name state using setName.
//     const handleInputChange = (event) => {

//         // Destructuring for cleaner syntax
//         const { name, value } = event.target;

//         // Update state with sanitized input
//         setName(sentenceCase(value));

//         // Assuming nature is a simple string input
//         setNature(value);

//         // Assuming query is a text input
//         setQuery(value);

//     };



//     return (
//         <div className="form_container">
//             <div className="form_fields">
//                 <div className="field_holder">
//                     <span className="label">Name</span>
//                     <input
//                         name="name" // Set name attribute for clarity
//                         value={name}
//                         onChange={handleInputChange}
//                     />
//                 </div>

//                 <div className="field_holder">
//                     <span className="label">Nature of Query</span>
//                     <select name="nature" value={nature} onChange={handleInputChange}>
//                         <option value="billing">Billing</option>
//                         <option value="sales">Sales</option>
//                         <option value="techSupport">Tech Support</option>
//                     </select>
//                 </div>

//                 <div className="field_holder">
//                     <span className="label">Query</span>
//                     <textarea name="query" value={query} onChange={handleInputChange} />
//                 </div>
//             </div>

//             <div className="output">
//                 <div className="ot-field bold">Name: {name}</div>
//                 <div className="ot-field bold">Nature of Query: {nature}</div>
//                 <div className="ot-field">Query: {query}</div>
//             </div>
//         </div>
//     );
// };



// export default MessageBox;





import { useState } from 'react';

// Utility function for sentence casing (optional)
// The sentenceCase function is included for demonstration purposes. It capitalizes the first letter of each word 
// and converts the rest to lowercase.You can remove it if sentence casing isn't needed.
const sentenceCase = (str) =>
    str?.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()) || '';



// The functional component MessageBox receives props for initial values (nameVal, natureVal, queryVal). Defaults 
// are provided using destructuring assignment.
const MessageBox = ({ nameVal = "", natureVal = "", queryVal = "" }) => {

    // State variables are created using useState for name, nature, and query, initialized with the corresponding 
    // props.
    const [name, setName] = useState(nameVal);
    const [nature, setNature] = useState(natureVal);
    const [query, setQuery] = useState(queryVal);


    // Handles changes in the name input field. It extracts the value from the event object, optionally applies 
    // sentence casing using sentenceCase, and updates the name state using setName.
    const handleInputChange = (event) => {
        const { target: { value } } = event;
        const updatedValue = sentenceCase(value); // Apply sentence casing if desired
        setName(updatedValue);
    };


    // Handles changes in the nature of query dropdown. It updates the nature state using setNature.
    const handleNatureChange = (event) => {
        setNature(event.target.value);
    };


    // Handles changes in the query textarea. It updates the query state using setQuery.
    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="form_container">
            <div className="form_fields">
                <div className="field_holder">
                    <span className="label">Name</span>
                    <input type="text" value={name} onChange={handleInputChange} />
                </div>

                <div className="field_holder">
                    <span className="label">Nature of Query</span>
                    <select value={nature} onChange={handleNatureChange}>
                        <option value="Billing">Billing</option>
                        <option value="Sales">Sales</option>
                        <option value="Tech Support">Tech Support</option>
                    </select>
                </div>

                <div className="field_holder">
                    <span className="label">Query</span>
                    <textarea value={query} onChange={handleQueryChange} />
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



// The MessageBox component is exported as the default export for use in other components.
export default MessageBox;


