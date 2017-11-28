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
    decrement();
};

// function answer() {   
//       $(this).attr("click") = randomQuestion.possibleAnswers;      
//       console.log("yes");
// // for (var i = 0; i < randomQuestion.possibleAnswers.length; i++) {

// //     var userGuess = $(".answers").click();
// //     console.log(userGuess)    
//     // Is the question wrong or right//    
//     // if (userGuess === randomQuestion.answer) {
//     //     //Logging points//
//     //     console.log(randomQuestion.answer)
//     //     correctAnswer++;
//     //     console.log("yes");
//     //     $("#correct").text(correctAnswer);
//     // } else{            
//     //     wrongAnswer++;            
//     //     $("#wrong").text(wrongAnswer);
//     //     console.log("yes1");
//     //     decrement();            
//     // };
// };

// };
//timer//
function decrement() {
    time--;
    $("#time").html(time)
    if(time === 0){
        wrongAnswer++;
        $("#wrong").text(wrongAnswer);
    }

};