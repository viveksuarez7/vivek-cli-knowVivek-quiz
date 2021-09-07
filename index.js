const chalk = require('chalk');
var readLineSync = require('readline-sync');

var userName = readLineSync.question(chalk.yellow('What is your name ? '));

var score=0;

console.log(chalk.cyan(`Hi ${userName} lets play a game called do you know Vivek ? Lets Start`));



  var questions = [
  {
    question:'What is the full name of Vivek ? ',
    answer:'Singh'
  },
  {
    question:'What is the hometown of Vivek ? ',
    answer:'Bokaro'
  },
  {
    question:'Which is the favourite football club of Vivek ? ',
    answer:'Liverpool'
  }
];

var highScore = [{
  name:'Vivek',
  score:3
},
{
  name:'Shashi',
  score:2
}
]

function gamePlay(question,answer){
  var userAns = readLineSync.question(question);
  if(userAns.toLowerCase()===answer.toLowerCase()){
    console.log(chalk.green('Your answer is Correct !'));
    score++;
    console.log(chalk.green('Your score is : ' + score ));
  }
  else{
    console.log(chalk.red('Your answer is Incorrect !'));
    score--;
    console.log(chalk.red('Your score is : ' + score ));  
  }
  console.log(chalk.bold('-------------------'));
}

for(var i=0;i<questions.length;i++){
   gamePlay(questions[i].question,questions[i].answer);
}

console.log(chalk.green(`${userName} you have completed the quiz and your score is ${score}`));

console.log(chalk.bold('-------------------'));

for(var j=0;j<highScore.length;j++){
  console.log(chalk.blue(`The high scores are ${highScore[j].name} : ${highScore[j].score}`));
  
}
if(score>=highScore[0].score){
    console.log(chalk.magenta('Hi ' + userName + ' you have got an high score send your screen shot let me add your name to the List !'));
  }



