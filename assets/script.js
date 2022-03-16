var startButton = document.querySelector(".btn");
var questionText = document.querySelector(".questionstext")

// var question1 = document.querySelector('#question1')
// var question2 = document.querySelector('#question2')
// var question3 = document.querySelector('#question3')
// var question4 = document.querySelector('#question4')
// var question5 = document.querySelector('#question5')


var currentQuestion = 0;
var score = 0;


//questions array

var questions = [
  {
    question: "Common data types do not include:",

    answers: [
      { option: "Strings", answer: false },
      { option: "Booleans", answer: false },
      { option: "Alerts", answer: true },
      { option: "Numbers", answer: false },
    ],
  },

  {
    question:
      "The Condition in an if / else statement is enclosed within ____.",

    answers: [
      { option: "quotes", answer: false },
      { option: "curly brackets", answer: false },
      { option: "parentheses", answer: true },
      { option: "square brackets", answer: false },
    ],
  },

  {
    question: "Arrays in JavaScript can be used to store _____.",

    answers: [
      { option: "numbers and strings", answer: false },
      { option: "other arrays", answer: false },
      { option: "Booleans", answer: false },
      { option: "all of the above", answer: true },
    ],
  },

  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",

    answers: [
      { option: "commas", answer: false },
      { option: "curly brackets", answer: false },
      { option: "quotes", answer: true },
      { option: "parenthesis", answer: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",

    answers: [
      { option: "JavaScript", answer: false },
      { option: "Terminal/Bash", answer: false },
      { option: "For Loops", answer: false },
      { option: "Console Log", answer: true },
    ],
  },
];






var timer;
var timerCount;



function startQuiz() {
  
  //display question 1 and answers 
  // questionText.innerHTML = questions[0].question + "<br> </br> " + questions[0].answers[0].option + "<br> </br> " + questions[0].answers[1].option + "<br> </br> " + questions[0].answers[2].option + "<br> </br> " + questions[0].answers[3].option;
 
  //display question 2 and answers
  // questionText.innerHTML = questions[1].question + "<br> </br> " + questions[1].answers[0].option + "<br> </br> " + questions[1].answers[1].option + "<br> </br> " + questions[1].answers[2].option + "<br> </br> " + questions[1].answers[3].option;
 
  // //display question 3 and answers
  //  questionText.innerHTML = questions[2].question + "<br> </br> " + questions[2].answers[0].option + "<br> </br> " + questions[2].answers[1].option + "<br> </br> " + questions[2].answers[2].option + "<br> </br> " + questions[2].answers[3].option;
 
  // display question 4 and answers
  // questionText.innerHTML = questions[3].question + "<br> </br> " + questions[3].answers[0].option + "<br> </br> " + questions[3].answers[1].option + "<br> </br> " + questions[3].answers[2].option + "<br> </br> " + questions[3].answers[3].option;
   
   //display question 5 and answers
   questionText.innerHTML = questions[4].question + "<br> </br> " + questions[4].answers[0].option + "<br> </br> " + questions[4].answers[1].option + "<br> </br> " + questions[4].answers[2].option + "<br> </br> " + questions[4].answers[3].option;


  }




//event listener to start quiz func

startButton.addEventListener("click", startQuiz);



// targeted dom to decorate dom
questionText.classList.add("myStyle"); 
