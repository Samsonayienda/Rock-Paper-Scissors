

function getComputerChoice() {

  const choices = ["Rock", "Paper", "Scissors"];
   
  const randomIndex = Math.floor(Math.random() * choices.length);
  choices.length[0]= "Rock";
  choices.length[1]= "Paper";
  choices.length[2]="Scissors";

   return choices[randomIndex];
  }
  
  // const selectedString = getComputerChoice();
  // console.log(selectedString);


  // let pick = prompt("Enter your option: ")
  // console.log(pick);

  let userWins = 0;
  let compWins = 0;
  let rounds = 0;


  for(rounds = 1; rounds <=5; rounds++){
      let pick = prompt("Enter your option: ")
      console.log(pick);
      const selectedString = getComputerChoice();
      console.log(selectedString);

  if (pick == "Rock" && selectedString =="Scissors" || pick == "Scissors" && selectedString == "Paper" || pick == "Paper" && selectedString == "Rock"){
   userWins == userWins + 1;
  console.log("Congrats! You beat the computer")
  
  }else if (pick == selectedString){
    console.log("You tie");
  }else{
    compWins == compWins+1;
    console.log("Congrats! You beat the human")
   
  }
}

if (rounds == 5){
  console.log("Game Over")
}
else if (rounds == 5 && userWins > compWins){
  console.log("Game Over, User Wins")

}else {
  console.log("Game Over! Sam wewe uko down man")
}




