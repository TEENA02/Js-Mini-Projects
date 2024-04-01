let scoreUser = 0;
let compScore = 0;
const msgBox=document.querySelector(".msg-container")
const userCount=document.querySelector("#user-score");
const compCount=document.querySelector("#computer-score");
const msg=document.querySelector("#msg");
const choies = document.querySelectorAll(".choice");
const computerChoice = () => {
  //choice rock paper scissor
  let options = ["stone", "paper", "scissor"];
  //generate 0,1,2
  const index = Math.floor(Math.random() * 3);
  return options[index];
};
const drawGame = () => {
  console.log("game draws");
  msg.innerText="Game Draws, Play Again";
  msg.style.backgroundColor="yellow";
};
const showResult = (userWin,userChoice,compChoice) => {
  if (userWin) {
    console.log("you win");
    msg.innerText=`You Won, Your choice ${userChoice} beats Computer choice ${compChoice}`;;
    scoreUser++;
    userCount.innerText=scoreUser;
    msg.style.backgroundColor="rgb(122, 203, 41)";

  } else {
    console.log("Computer win");
    msg.innerText=`Computer Won, Computer choice ${compChoice} beats Your choice ${userChoice}`;
    compScore++;
    compCount.innerText=compScore;
    msg.style.backgroundColor="red";
  }
};
const playGame = (choiceId) => {
  const userchoice = choiceId;
  const compChoice = computerChoice();
  if (userchoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "stone") {
      //sciisror ,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    showResult(userWin,userchoice,compChoice);
  }
};
choies.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    console.log(`the choice was selected ${choiceId}`);
    playGame(choiceId);
  });
});
document.querySelector("Button").addEventListener("click", function() {
    // Refresh the page
    location.reload();
})