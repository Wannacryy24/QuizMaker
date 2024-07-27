export function interviewQuiz() {
  const previouslySavedQuizzes = [
    {
      heading: "JavaScript Interview Questions",
      questionsArray: [
        {
          question: "What is the difference between `let`, `var`, and `const` in JavaScript?",
          options: [
            { text: "`var` is function-scoped, `let` and `const` are block-scoped", value: "1" },
            { text: "`var` and `let` are function-scoped, `const` is block-scoped", value: "2" },
            { text: "`var` and `const` are block-scoped, `let` is function-scoped", value: "3" },
            { text: "`var` is block-scoped, `let` and `const` are function-scoped", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What are closures in JavaScript?",
          options: [
            { text: "Closures are functions that are executed immediately", value: "1" },
            { text: "Closures are functions that remember their lexical scope", value: "2" },
            { text: "Closures are functions without a return statement", value: "3" },
            { text: "Closures are anonymous functions", value: "4" },
          ],
          correctAnswer: "2",
        },
        {
          question: "What is the purpose of the `this` keyword in JavaScript?",
          options: [
            { text: "`this` refers to the global object", value: "1" },
            { text: "`this` refers to the current function", value: "2" },
            { text: "`this` refers to the object from which the function was called", value: "3" },
            { text: "`this` is a placeholder for a value", value: "4" },
          ],
          correctAnswer: "3",
        },
        {
          question: "How do you create a new object in JavaScript?",
          options: [
            { text: "Using the `new` keyword", value: "1" },
            { text: "Using the `create` keyword", value: "2" },
            { text: "Using the `Object.new` method", value: "3" },
            { text: "Using the `object` keyword", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is event delegation in JavaScript?",
          options: [
            { text: "Attaching an event listener to a parent element to handle events on child elements", value: "1" },
            { text: "Attaching an event listener to a child element to handle events on parent elements", value: "2" },
            { text: "Using an event listener to delegate tasks to other functions", value: "3" },
            { text: "Delegating the creation of event listeners to a library", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the difference between `==` and `===` in JavaScript?",
          options: [
            { text: "`==` checks for equality of value, `===` checks for equality of value and type", value: "1" },
            { text: "`==` checks for equality of type, `===` checks for equality of value and type", value: "2" },
            { text: "`==` checks for strict equality, `===` checks for loose equality", value: "3" },
            { text: "`==` checks for equality of value and type, `===` checks for equality of value", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is a promise in JavaScript?",
          options: [
            { text: "A promise is a function that returns another function", value: "1" },
            { text: "A promise is an object that represents the eventual completion (or failure) of an asynchronous operation", value: "2" },
            { text: "A promise is a method to handle synchronous operations", value: "3" },
            { text: "A promise is a placeholder for a future value", value: "4" },
          ],
          correctAnswer: "2",
        },
        {
          question: "How do you handle errors in JavaScript using try-catch?",
          options: [
            { text: "By wrapping the code that might throw an error in a `try` block and handling the error in a `catch` block", value: "1" },
            { text: "By using the `errorHandler` function", value: "2" },
            { text: "By wrapping the code that might throw an error in a `catch` block and handling the error in a `try` block", value: "3" },
            { text: "By using the `error.try` method", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the difference between `null` and `undefined` in JavaScript?",
          options: [
            { text: "`null` is an object that represents an intentional absence of value, `undefined` is a type that represents a variable that has not been assigned a value", value: "1" },
            { text: "`null` is a type that represents a variable that has not been assigned a value, `undefined` is an object that represents an intentional absence of value", value: "2" },
            { text: "`null` and `undefined` are interchangeable", value: "3" },
            { text: "`null` is a function, `undefined` is a variable", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the purpose of the `map` function in JavaScript?",
          options: [
            { text: "To iterate over an array and perform a function on each element", value: "1" },
            { text: "To filter elements in an array", value: "2" },
            { text: "To transform elements in an array and return a new array", value: "3" },
            { text: "To concatenate arrays", value: "4" },
          ],
          correctAnswer: "3",
        },
      ],
    },
    {
      heading: "HTML Interview Questions",
      questionsArray: [
        {
          question: "What does HTML stand for?",
          options: [
            { text: "HyperText Markup Language", value: "1" },
            { text: "HyperText Markdown Language", value: "2" },
            { text: "HyperText Machine Language", value: "3" },
            { text: "HyperText Main Language", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the purpose of the `<head>` tag in HTML?",
          options: [
            { text: "To contain metadata about the document", value: "1" },
            { text: "To define the header section of a webpage", value: "2" },
            { text: "To contain the main content of the document", value: "3" },
            { text: "To define a section for JavaScript code", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the correct way to create a hyperlink in HTML?",
          options: [
            { text: "<a href='http://www.example.com'>Example</a>", value: "1" },
            { text: "<link src='http://www.example.com'>Example</link>", value: "2" },
            { text: "<a>http://www.example.com</a>", value: "3" },
            { text: "<a url='http://www.example.com'>Example</a>", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
          options: [
            { text: "To specify alternative text if the image cannot be displayed", value: "1" },
            { text: "To specify the alignment of the image", value: "2" },
            { text: "To provide a title for the image", value: "3" },
            { text: "To specify the width of the image", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What does HTML stand for?",
          options: [
            { text: "HyperText Markup Language", value: "1" },
            { text: "HyperText Markdown Language", value: "2" },
            { text: "HyperText Machine Language", value: "3" },
            { text: "HyperText Main Language", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the purpose of the `<head>` tag in HTML?",
          options: [
            { text: "To contain metadata about the document", value: "1" },
            { text: "To define the header section of a webpage", value: "2" },
            { text: "To contain the main content of the document", value: "3" },
            { text: "To define a section for JavaScript code", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the correct way to create a hyperlink in HTML?",
          options: [
            { text: "<a href='http://www.example.com'>Example</a>", value: "1" },
            { text: "<link src='http://www.example.com'>Example</link>", value: "2" },
            { text: "<a>http://www.example.com</a>", value: "3" },
            { text: "<a url='http://www.example.com'>Example</a>", value: "4" },
          ],
          correctAnswer: "1",
        },
        {
          question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
          options: [
            { text: "To specify alternative text if the image cannot be displayed", value: "1" },
            { text: "To specify the alignment of the image", value: "2" },
            { text: "To provide a title for the image", value: "3" },
            { text: "To specify the width of the image", value: "4" },
          ],
          correctAnswer: "1",
        },
        
      ],
    },
  ];

  const savedQuizzes = JSON.parse(localStorage.getItem('savedQuizzes')) || [];
  if(savedQuizzes.length===0){
    localStorage.setItem('savedQuizzes', JSON.stringify(previouslySavedQuizzes));
  }
}



async function newdatafromApi(){
  try{
    const response= await fetch(`https://opentdb.com/api.php?amount=10`);
    const data = await response.json();
    var booleanResult = data.results.filter(function(item){
      return item.type===`boolean`
    })
    console.log(booleanResult);
  }catch(error){
    console.log(error);
  }
}

// newdatafromApi();