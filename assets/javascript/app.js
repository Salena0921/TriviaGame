//Question Variables//
var bank = [{
        question: "What is the correct address of the Dursleys?",
        possibleAnswers: ["4 Private Drive", "4 Privet Drive", "14 Prime Drive", "40 Privet Drive"],
        answer: "4 Privet Drive"
    },
    {
        question: "What are the names of Harry's aunt, uncle, and cousin?",
        possibleAnswers: ["Patricia,Vernon, Dursely", "Petunia, Vernon, Dudley", "Patty, Victor, Daniel", "Petunia, Vernon, David"],
        answer: "Petunia, Vernon, Dudley"
    },
    {
        question: "What does Harry accidentally set loose at the zoo?",
        possibleAnswers: ["Bear", "Lion", "Elephant", "Snake"],
        answer: "Snake"
    },
    {
        question: "Why does Uncle Vernon love Sundays?",
        possibleAnswers: ["Its the only day he can relax.", "Its the day he and his family(minus Harry) get to go out for tea.", "There is no mail.", "Harry goes to the neighbor's house to do chores."],
        answer: "There is no mail."
    },
    {
        question: "When is Harry's birthday and how old is he when he starts Hogwarts?",
        possibleAnswers: ["July 31, 11", "July 30, 11", "July 31, 10", "July 30, 10"],
        answer: "Petunia, Vernon, Dudley"
    },
    {
        question: "What is the name of the pub Harry goes to with Hagrid in London?",
        possibleAnswers: ["Hog's Head Inn", "Three Broomsticks Inn", "Potions, Potions, Potions", "Leaky Cauldron"],
        answer: "Leaky Cauldron"
    },
    {
        question: "Where does Harry Potter first meet Draco Malfoy?",
        possibleAnswers: ["Madam Malkin's", "Hogwarts", "Hogwarts Express", "Leaky Cauldron"],
        answer: "Madam Malkin's"
    },
    {
        question: "What type of owl is Hedwig?",
        possibleAnswers: ["Horned Owl", "Barn-owl", "Snowy Owl", "Eurasian eagle-owl"],
        answer: "Snowy Owl"
    },
    {
        question: "What is the name of the train station and platform number do Hogwarts students use?",
        possibleAnswers: ["Hogsmeade Station, 9 3/4", "King's Cross Station, 9 3/4", "London Station, 9 3/4", "King's Cross Station, 9 1/4"],
        answer: "Petunia, Vernon, Dudley"
    },
    {
        question: "What has Neville Longbottom lost on the train?",
        possibleAnswers: ["His wand", "A rat", "A toad", "His robe"],
        answer: "A toad"
    },

];

var timeClock = false;
var time = 16;
var correctAnswer = 0;
var wrongAnswer = 0;

//When page loads//
$(document).ready(function beginning() {
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
        if (randomQuestion.possibleAnswers[0] === randomQuestion.answer) {
            console.log("win");
            correctAnswer++;
            $("#correct").text(correctAnswer);
            reset();

        } else {
            console.log("lose");
            wrongAnswer++;
            $("#wrong").text(wrongAnswer);
            reset();
        }

    });
    $("#answer2").click(function () {
        console.log(randomQuestion.possibleAnswers[1]);
        if (randomQuestion.possibleAnswers[1] === randomQuestion.answer) {
            console.log("win");
            correctAnswer++;
            $("#correct").text(correctAnswer);
            reset();

        } else {
            console.log("lose");
            wrongAnswer++;
            $("#wrong").text(wrongAnswer);
            reset();
        }

    });
    $("#answer3").click(function () {
        console.log(randomQuestion.possibleAnswers[2]);
        if (randomQuestion.possibleAnswers[2] === randomQuestion.answer) {
            console.log("win");
            correctAnswer++;
            $("#correct").text(correctAnswer);
            reset();

        } else {
            console.log("lose");
            wrongAnswer++;
            $("#wrong").text(wrongAnswer);
            reset();
        }

    });
    $("#answer4").click(function () {
        console.log(randomQuestion.possibleAnswers[3]);
        if (randomQuestion.possibleAnswers[3] === randomQuestion.answer) {
            console.log("win");
            correctAnswer++;
            $("#correct").text(correctAnswer);
            reset();
        } else {
            console.log("lose");
            wrongAnswer++;
            $("#wrong").text(wrongAnswer);
            reset();
        }

    });
    winOrLose();
    decrement();
    
};


//timer//
function decrement() {
    time--;
    $("#time").html(time)
    if (time === 0) {
        wrongAnswer++;
        $("#wrong").text(wrongAnswer);
        clearInterval(intervalTime);
        reset();
        winOrLose();
    }

};

//reset//
function reset() {
    time = 16;
    timeClock = false;
    $("#correct").text(correctAnswer);
    $("#wrong").text(wrongAnswer);
    if (!timeClock) {
        intervalTime = setInterval(decrement, 1000);
        timeClock = true;
        console.log(timeClock);
    }

    decrement();
    randomQuestion = bank[Math.floor(Math.random() * bank.length)];
    $("#question").text(randomQuestion.question);
    document.getElementById("answer1").innerHTML = randomQuestion.possibleAnswers[0];
    document.getElementById("answer2").innerHTML = randomQuestion.possibleAnswers[1];
    document.getElementById("answer3").innerHTML = randomQuestion.possibleAnswers[2];
    document.getElementById("answer4").innerHTML = randomQuestion.possibleAnswers[3];

    console.log(bank);
    console.log(randomQuestion);
    console.log("yeah")

};

function winOrLose() {
    if (correctAnswer === 7) {
        alert("Year 1 complete");
        
    } else if (wrongAnswer === 3) {
        alert("Sorry Muggle");
        
    }

};