//Questions
const questions = {
  HTML: [
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Markup Language", "Home Tool Markup Language"], answer: 0 },
      { question: "What is the purpose of the <head> tag?", options: ["To display content", "To include metadata", "To define body structure", "To add JavaScript"], answer: 1 },
      { question: "What is the purpose of the <head> tag?", options: ["To display content", "To include metadata", "To define body structure", "To add JavaScript"], answer: 1 },
      { question: "What tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyperlink>"], answer: 0 },
      { question: "Which attribute is used to specify an image?", options: ["src", "href", "img", "alt"], answer: 0 },
      { question: "Which tag is used for a line break?", options: ["<br>", "<lb>", "<break>", "<ln>"], answer: 0 },
      { question: "What is the correct HTML for adding a background color?", options: ["<body bg='yellow'>", "<body style='background-color:yellow;'>", "<background>yellow</background>", "<color>yellow</color>"], answer: 1 },
      { question: "Which tag is used to define an unordered list?", options: ["<ul>", "<li>", "<ol>", "<list>"], answer: 0 },
      { question: "What is the correct HTML for inserting an image?", options: ["<img src='image.jpg'>", "<image src='image.jpg'>", "<img link='image.jpg'>", "<img href='image.jpg'>"], answer: 0 },
      { question: "Which HTML tag is used to define a table row?", options: ["<tr>", "<td>", "<table>", "<row>"], answer: 0 },    
 ],
    CSS: [
      { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: 0 },
      { question: "Which property changes the background color?", options: ["background-color", "color", "bgcolor", "background"], answer: 0 },
      { question: "Which property controls text size?", options: ["text-size", "font-size", "size", "text-style"], answer: 1 },
      { question: "How do you select an element with an ID in CSS?", options: [".id", "#id", "*id", "&id"], answer: 1 },
      { question: "Which property is used to make text bold?", options: ["text-style", "font-weight", "font-bold", "bold"], answer: 1 },
      { question: "Which property changes the font of an element?", options: ["font-style", "font-family", "font", "font-type"], answer: 1 },
      { question: "What is the default position value in CSS?", options: ["static", "relative", "absolute", "fixed"], answer: 0 },
      { question: "Which CSS property controls the visibility?", options: ["display", "visibility", "show", "view"], answer: 1 },
      { question: "What is the correct syntax for a class selector?", options: [".classname", "#classname", "classname", "*classname"], answer: 0 },
      { question: "Which property is used to align text?", options: ["text-align", "align-text", "text-position", "align"], answer: 0 },

  ],
    JavaScript: [
    { question: "What is JavaScript used for?", options: ["Structuring web pages", "Adding interactivity", "Styling web pages", "Managing servers"], answer: 1 },
    { question: "Which keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], answer: 3 },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "/* */", "<!-- -->"], answer: 0 },
  { question: "Which method adds an item to an array?", options: ["add()", "push()", "append()", "insert()"], answer: 1 },
  { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Data Oriented Model"], answer: 0 },
  { question: "Which method removes the last item of an array?", options: ["pop()", "remove()", "delete()", "cut()"], answer: 0 },
  { question: "Which statement is used to stop a loop?", options: ["exit", "end", "break", "stop"], answer: 2 },
  { question: "What does 'NaN' stand for?", options: ["Not a Number", "Null and None", "New and Null", "None"], answer: 0 },
  { question: "What does the '===' operator do?", options: ["Compares values only", "Compares values and types", "Assigns a value", "Checks for equality"], answer: 1 },
  { question: "Which object handles browser events?", options: ["window", "document", "event", "navigator"], answer: 2 },

  ],
    React: [
  {question: "What is React?",options: ["A library", "A framework", "A database", "A language"],answer: 0},
  { question: "What is React primarily used for?", options: ["Backend development", "Building user interfaces", "Database management", "Mobile development"], answer: 1 },
  { question: "What is JSX in React?", options: ["JavaScript XML", "JavaScript Extension", "JavaScript Execution", "None of the above"], answer: 0 },
  {question: "What is the purpose of `props` in React?",options: ["To pass data between components","To manage state locally","To style components","To handle events",],answer: 0},
  { question: "What is the `useState` hook used for?",options: ["To fetch data.","To manage side effects.","To manage component state.","To define routes in an application.",],answer: 2},
  {question: "What is React Router used for?", options: ["Managing state in a React application","Handling navigation and routing","Styling components","Optimizing component performance",],answer: 1},
  {question: "What is the purpose of `key` in a list?",options: ["To improve performance","To uniquely identify elements","For security reasons","To bind events",],answer: 1},
  {question: "What is used to manage state in React?",options: ["Redux", "State", "Hooks", "All of the above"],answer: 3},
  {question: "What is the purpose of lifting state up in React?",options: ["To pass state to Redux.","To reduce the number of components in the app.","To share state between child components.","To use state in the root component only.",],answer: 2},
  {question: "How can you handle forms in React?",options: ["By using form data directly in the DOM.","By using controlled components with state.","By using uncontrolled components only.","By writing custom HTML.",],answer: 1}
 ],
};

let username = "";
let category = "";
let questionCount = 0;
let score = 0;
let timer;
let timeLeft = 15;

//get Username
function getUsername(event) {
  event.preventDefault();
  username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter your name.");
    return false;
  }
//Welcome Note With Username
  document.getElementById("welcome-note").innerText =
    "Welcome " + username + " you can start the quiz now!";
  document.getElementById("welcome-note").style.color = "black";
  document.getElementById("username").value = "";
  return false;
}
//Select category of quiz
function selectCategory(selectedCategory) {
  if (!username) {
    alert("Please enter your name first.");
    return;
  }
  category = selectedCategory;
  questionCount = 0;
  score = 0;
  timeLeft = 15;

  // Hide start screen, show quiz screen
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  displayQuestion();
  startTimer();
}
//Timer
function startTimer() {
  clearInterval(timer);
  document.getElementById("timer").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}
//Display questions
function displayQuestion() {
  if (!questions[category] || questionCount >= questions[category].length) {
    endQuiz();
    return;
  }
  const questionData = questions[category][questionCount];

  // Update category title and question number
  document.getElementById("category-title").textContent = `${category} Quiz`;
  document.getElementById("question-number").textContent = `Question ${
    questionCount + 1
  } of ${questions[category].length}`;

  // Display the question
  document.getElementById("question-container").textContent =
    questionData.question;

  // Display options
  const optionContainer = document.getElementById("option-container");
  optionContainer.innerHTML = "";
  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => checkAnswer(index));
    optionContainer.appendChild(button);
  });

  timeLeft = 15; // Reset timer for each question
  startTimer();
}
// Show Answer
function checkAnswer(selectedIndex) {
  const correctAnswer = questions[category][questionCount].answer;
  if (selectedIndex === correctAnswer) {
    score++; // Increment score for the correct answer
  }

  // Automatically move to the next question
  nextQuestion();
}

function nextQuestion() {
  if (questionCount < questions[category].length - 1) {
    questionCount++;
    displayQuestion();
  } else {
    endQuiz();
  }
}

function prevQuestion() {
  if (questionCount > 0) {
    questionCount--;
    displayQuestion();
  } else {
    alert("This is the first question.");
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById("final-score").textContent = score;
}

function restartQuiz() {
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
  category = "";
  questionCount = 0;
  score = 0;
  timeLeft = 15;
}