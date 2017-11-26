//Question Variables//
var bank  =[ {
    question:"What is the correct address of the Dursleys?",
    possibleAnswers:["4 Private Drive", "4 Privet Drive", "14 Prime Drive"], 
    answer:"4 Privet Drive"
},
{question:"Where is the names of Harry's aunt, uncle, and cousin?",
 possibleAnswers:["Patricia,Vernon, Dursely", "Petunia, Vernon, Dudley", "Patty, Victor, Daniel"],
 answer:"Petunia, Vernon, Dudley"}
];

//Start Game//
//When Question is displayed//
randomQuestion = bank[Math.floor(Math.random() * bank.length)];
document.getElementById("question").innerHTML = randomQuestion.question;
document.getElementById("answer1").innerHTML = randomQuestion.possibleAnswers[0];
document.getElementById("answer2").innerHTML = randomQuestion.possibleAnswers[1];
document.getElementById("answer3").innerHTML = randomQuestion.possibleAnswers[2];
console.log(bank);
console.log(randomQuestion);
//timer//
//Is the question worng or right//
//Logging points//