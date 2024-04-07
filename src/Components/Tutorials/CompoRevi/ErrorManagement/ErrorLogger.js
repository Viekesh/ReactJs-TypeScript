


// This code defines a reusable logger function that takes an error message as input, formats it into a 
// human - readable log entry, and then logs it to the browser's error console. This is a helpful function for 
// debugging and tracking errors in your application.

// This arrow function will be used to log errors to the console and takes a single argument named error.
const logger = error => {

  // creates a new Date object, which represents the current date and time.
  const date = new Date();



  // This line defines a constant named content using template literals (backticks).
  // Template literals allow embedding expressions within strings using ${expression} syntax.
  // Inside the template literal:
  // The first few lines create a formatted error log message with headings and dividers.
  // date.toDateString() formats the date as a human - readable string(e.g., "Fri Apr 05 2024").
  // date.getHours(), date.getMinutes(), and date.getSeconds() extract the hour, minute, and second components of the current time.
  // ${ error } inserts the actual error message passed as an argument to the logger function.
  const content = `
    ERROR LOG
    ---------
    Date: ${date.toDateString()}
    Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    ------------------------------------------------------------
    Error: ${error}
    ------------------------------------------------------------
  `;

  console.error(content);
};



export default logger;



//