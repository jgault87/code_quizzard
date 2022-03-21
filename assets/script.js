var startButton = document.querySelector(".btn");
var questionText = document.querySelector(".questionstext");
var timerElement = document.getElementById("timer");
var question1 = document.querySelector(".question1");
var timershow = document.querySelector(".positionup");
var hideWelcome = document.querySelector(".questionhead");

var feedbackEl = document.getElementById("feedback");
var feedfrontEl = document.getElementById("feedfront");

//correct/incorrect buttons
var submitYes = document.getElementsByClassName("correct");
var submitNo = document.getElementsByClassName("incorrect");

var answeredCorrect = submitYes.onclick;

// arrays to loop through all correct/incorrect buttons

for (var i = 0; i < submitYes.length; i++) {
  submitYes[i].addEventListener("click", function () {
    console.log("Correct");
    Question1.classList.add("hidden");
    question2.removeAttribute("class", "hidden");

    feedfrontEl.removeAttribute("class", "hidden");
    setTimeout(function () {
      feedfrontEl.setAttribute("class", "hidden");
    }, 1000);

    // for (var i = 0; i < submitYes.length; i++) {
    //   submitYes[i].addEventListener("click", function () {
    //     console.log("Correct")

    //     question2.classList.add("hidden")
    //     question3.removeAttribute("class", "hidden")
  });
}

for (var i = 0; i < submitNo.length; i++) {
  submitNo[i].addEventListener("click", function () {
    console.log("Incorrect");
    updateCountDown();

    feedbackEl.removeAttribute("class", "hidden");
    setTimeout(function () {
      feedbackEl.setAttribute("class", "hidden");
    }, 1000);
  });
}

//question elements
var Question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");

var timer;
var timerCount;
var currentQuestion = 0;
var score = 0;

//function to decrement time on wrong answer

function updateCountDown() {
  timerCount = timerCount - 10;

  if (timerCount < 0) {
    timerCount = 0;
  }
}

function reload() {
  reload = location.reload();
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      questionText.textContent = "🧙STUPEFY🧙";
      timershow.textContent = "You ran out of time";
      startButton.innerHTML = "Retry?";
      startButton.addEventListener("click", reload, false);
    }
  }, 1000);
}

// startgame function fires on click event

function startQuiz() {
  hideWelcome.classList.add("hidden");
  timershow.style.visibility = "visible";
  timerCount = 50;
  startButton.disabled = true;
  startTimer();
  Question1.removeAttribute("class", "hidden");
}

startButton.addEventListener("click", startQuiz);

// targeted dom to decorate text due to lazy
questionText.classList.add("myStyle");
timershow.style.visibility = "hidden";
