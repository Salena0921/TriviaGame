var panel = $("#quiz-area");
var countStartNumber = 20;

//Question Variables//
var questions = [{
    question: "What is the correct address of the Dursleys?",
    answers: ["4 Private Drive", "4 Privet Drive", "14 Prime Drive", "40 Privet Drive"],
    correctAnswer: "4 Privet Drive"
  },
  {
    question: "What are the names of Harry's aunt, uncle, and cousin?",
    answers: ["Patricia,Vernon, Dursely", "Petunia, Vernon, Dudley", "Patty, Victor, Daniel", "Petunia, Vernon, David"],
    correctAnswer: "Petunia, Vernon, Dudley"
  },
  {
    question: "What does Harry accidentally set loose at the zoo?",
    answers: ["Bear", "Lion", "Elephant", "Snake"],
    correctAnswer: "Snake"
  },
  {
    question: "Why does Uncle Vernon love Sundays?",
    answers: ["Only day he can relax", "Can go out for tea", "There is no mail", "Harry is at neighbor's house"],
    correctAnswer: "There is no mail."
  },
  {
    question: "When is Harry's birthday and how old is he when he starts Hogwarts?",
    answers: ["July 31, 11", "July 30, 11", "July 31, 10", "July 30, 10"],
    correctAnswer: "July 31, 11"
  },
  {
    question: "What is the name of the pub Harry goes to with Hagrid in London?",
    answers: ["Hog's Head Inn", "Three Broomsticks Inn", "Potions, Potions, Potions", "Leaky Cauldron"],
    correctAnswer: "Leaky Cauldron"
  },
  {
    question: "Where does Harry Potter first meet Draco Malfoy?",
    answers: ["Madam Malkins", "Hogwarts", "Hogwarts Express", "Leaky Cauldron"],
    correctAnswer: "Madam Malkins"    
  },
  {
    question: "What type of owl is Hedwig?",
    answers: ["Horned Owl", "Barn-owl", "Snowy Owl", "Eurasian eagle-owl"],
    correctAnswer: "Snowy Owl"
  },
  {
    question: "What is the name of the train station and platform number do Hogwarts students use?",
    answers: ["Hogsmeade Station, 9 3/4", "King's Cross Station, 9 3/4", "London Station, 9 3/4", "King's Cross Station, 9 1/4"],
    correctAnswer: "King's Cross Station, 9 3/4"
  },
  {
    question: "What has Neville Longbottom lost on the train?",
    answers: ["His wand", "A rat", "A toad", "His robe"],
    correctAnswer: "A toad"
  },

];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,
  
  countdown: function () {  
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function () {

    timer = setInterval(game.countdown, 1000);

    $("#title").hide(); 
    $("#subtitle").hide(); 
    
    panel.html("<h2 class='question'>" + questions[this.currentQuestion].question + "</h2>");
    console.log(this.questions);
    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i] +
        "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function () {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function () {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    panel.html("<h2>Out of Time!</h2>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 1000);
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },

  lossResults: function() {

    clearInterval(timer);

    $("#counter-number").text(game.counter);

    panel.append("<br><button id='start-over'>Start Over</button>");
  },

  winResults: function() {
    
    clearInterval(timer);

    $("#counter-number").text(game.counter);

    panel.append("<br><button id='yeartwo'>Year 2</button>");
  },

  clicked: function (e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function () {

    game.incorrect++;

    clearInterval(timer);

    panel.html("<h2>Nope!</h2>");

    if (this.incorrect === 3) {
      setTimeout(game.lossResults);      
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },

  answeredCorrectly: function () {

    clearInterval(timer);

    game.correct++;

    panel.html("<h2>Correct!</h2>");

    if (this.correct === 7) {
      setTimeout(game.winResults);     
    } else {
      setTimeout(game.nextQuestion, 1000);
    }
  },

  reset: function () {
    
    clearInterval(timer);

    $("#counter-number").text(game.counter);

    $("#title").show(); 
    $("#subtitle").show(); 

    panel.html("<button id='start'>Start</button>");
    $("#timeKeeper").empty();   
    
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function () {
  game.reset();
});

$(document).on("click", ".answer-button", function (e) {
  game.clicked(e);
});

$(document).on("click", "#start", function () {
  $("#sub-wrapper").prepend("<h2 id='timeKeeper'>Time Remaining: <span id='counter-number'>20</span> Seconds</h2>");
  game.loadQuestion();
});

$(document).on("click", "#yeartwo" , function () {
  panel.html("<h2>Coming Soon</h2>")
});