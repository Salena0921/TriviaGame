//Question Variables//
var bank = [{
        question: "What is the correct address of the Dursleys?",
        possibleAnswers: ["4 Private Drive", "4 Privet Drive", "14 Prime Drive", "40 Privet Drive"],
        answer: "4 Privet Drive"
    },
    {
        question: "Where is the names of Harry's aunt, uncle, and cousin?",
        possibleAnswers: ["Patricia,Vernon, Dursely", "Petunia, Vernon, Dudley", "Patty, Victor, Daniel", "Petunia, Vernon, David"],
        answer: "Petunia, Vernon, Dudley"
    }
];

var timeClock = false;
var time = 16;
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
    document.getElementById("answer4").innerHTML = randomQuestion.possibleAnswers[3];
    
    console.log(bank);
    console.log(randomQuestion);
    answer();

});

function answer() {    
    $("#answer1").click(function () {
        console.log(randomQuestion.possibleAnswers[0]);
        if(randomQuestion.possibleAnswers[0] === randomQuestion.answer){
            console.log("win");
            correctAnswer++;  
            $("#correct").text(correctAnswer);        
        }else{
            console.log("lose");
            wrongAnswer++;
            $("#wrong").text(wrongAnswer);
        }
    });
    // $("#answer2").click(function () {
    //     console.log(randomQuestion.possibleAnswers[1]);
    //     if(randomQuestion.possibleAnswers[1] === randomQuestion.answer){
    //         console.log("win");
    //         correctAnswer++;  
    //         $("#correct").text(correctAnswer);        
    //     }else{
    //         console.log("lose");
    //         wrongAnswer++;
    //         $("#wrong").text(wrongAnswer);
    //     }
    // });
    // $("#answer3").click(function () {
    //     console.log(randomQuestion.possibleAnswers[2]);
    //     if(randomQuestion.possibleAnswers[2] === randomQuestion.answer){
    //         console.log("win");
    //         correctAnswer++;  
    //         $("#correct").text(correctAnswer);        
    //     }else{
    //         console.log("lose");
    //         wrongAnswer++;
    //         $("#wrong").text(wrongAnswer);
    //     }
    // });
    // $("#answer4").click(function () {
    //     console.log(randomQuestion.possibleAnswers[3]);
    //     if(randomQuestion.possibleAnswers[3] === randomQuestion.answer){
    //         console.log("win");
    //         correctAnswer++;  
    //         $("#correct").text(correctAnswer);        
    //     }else{
    //         console.log("lose");
    //         wrongAnswer++;
    //         $("#wrong").text(wrongAnswer);
    //     }
    // });
    decrement();
};


//timer//
function decrement() {
    time--;
    $("#time").html(time)
    if(time === 0){
        wrongAnswer++;
        $("#wrong").text(wrongAnswer);
        clearInterval(intervalTime);        
    }
};