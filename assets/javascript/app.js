//Question Variables//
var bank = [{
        question: "What is the correct address of the Dursleys?",
        possibleAnswers: ["4 Private Drive", "4 Privet Drive", "14 Prime Drive"],
        answer: "4 Privet Drive"
    },
    {
        question: "Where is the names of Harry's aunt, uncle, and cousin?",
        possibleAnswers: ["Patricia,Vernon, Dursely", "Petunia, Vernon, Dudley", "Patty, Victor, Daniel"],
        answer: "Petunia, Vernon, Dudley"
    }
];

var timeClock = false;
var time = 31
var correctAnswer = 0;
var wrongAnswer = 0;

//When page loads//
$(document).ready(function () {
    $(".questions").hide();
    correctAnswer = 0;
    wrongAnswer = 0;

    $("#correct").text(correctAnswer);
    $("#wrong").text(wrongAnswer);
    $("#startb").click(function () {
        //When Question is displayed timer starts//        
        $(".startpage").hide();
        $(".questions").show();
        if (!timeClock) {
            intervalTime = setInterval(decrement, 1000);
            timeClock = true;
            console.log(timeClock);
        }
    });
});

//Start Game//
$(".questions").each(function play() {
    randomQuestion = bank[Math.floor(Math.random() * bank.length)];
    $("#question").text(randomQuestion.question);
    document.getElementById("answer1").innerHTML = randomQuestion.possibleAnswers[0];
    document.getElementById("answer2").innerHTML = randomQuestion.possibleAnswers[1];
    document.getElementById("answer3").innerHTML = randomQuestion.possibleAnswers[2];
    // $(".answers").click();  
    console.log(bank);
    console.log(randomQuestion);
    
});

$(".answers").click(function answer() {    
    for (var i = 0; i < randomQuestion.possibleAnswers.length; i++) {
        var userGuess = randomQuestion.possibleAnswers[i];
        console.log(userGuess)
        //Is the question worng or right//    
        if (userGuess === randomQuestion.answer) {
            //Logging points//
            correctAnswer++;
            console.log("yes");
            $("#correct").text(correctAnswer);
        } else if (time === 0 || userGuess !== randomQuestion.answer) {
            wrongAnswer++;
            $("#wrong").text(wrongAnswer);
            console.log("yes1");
            decrement();            
        };
    };
});
//timer//
function decrement() {
    time--;
    $("#time").html(time)
};
