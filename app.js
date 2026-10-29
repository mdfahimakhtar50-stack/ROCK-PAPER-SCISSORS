let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//winner function
const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        msg.innerText = `you win !  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = `you lost . ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}


//draw condition
const drawGame = () => {
    console.log("game was draw. ");
    msg.style.backgroundColor = "#0F0326";
    msg.innerText = "it's a draw. play again ?";
}

// function to generate comp choice
const genCompChoice = () =>{
    //storing the choices in an array
    const options = ["rock","paper","scissors"];
    const randomIdx  = Math.floor(Math.random()*3); //generate random numbers less than 3
    return options[randomIdx];
}
//function to track computer choice
const playGame = (userChoice) => { //taking user choice as paramaeter for comparision
    //generate computer choice
    const compChoice = genCompChoice();
     if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true; //condition for users win
        if(userChoice === "rock"){
            //scissors , papers
            userWin = compChoice === "paper"? false : true;

        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissor"? false:true ;
        }
        else if(userChoice === "scissor"){
            //paper, rock
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice ,compChoice);
    }


};
choices.forEach(( choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); //user kya choice kiya hai uska id bhi disaplay karega
     playGame(userChoice);
    });
});