rock = document.querySelector(".rock")
paper = document.querySelector(".paper")
scissors = document.querySelector(".scissors")
round_result = document.querySelector(".round_result")
result = document.querySelector(".result")
scores = document.querySelector(".score")

pc = 0;
user = 0;
round = 0;

rock.addEventListener("click", function(){
game("rock");
});
paper.addEventListener("click", function(){
game("paper");
});
scissors.addEventListener("click", function(){
game("scissors");
});

function computerPlay()
{
	random_no = Math.ceil(Math.random()*3);
	comp_choice = '';	//1 - Rock 2 - Paper 3 - Scissors
	if(random_no == 1 )
		comp_choice = "rock";
	else if (random_no == 2)
		comp_choice = "paper";
	else if (random_no == 3)
		comp_choice = "scissors";
	return comp_choice;
}


function playRound(playerSelection, computerSelection)
{
	switch(playerSelection)
	{
		case "rock":
			if(computerSelection == "rock")
			{
				round_result.innerText = "This round is a tie";
			}
			else if(computerSelection == "paper")
			{
				round_result.innerText = "PC wins this round";
				pc++;
			}
			else if(computerSelection == "scissors")
			{
				round_result.innerText = "You win this round";
				user++;
			}
			else
			{
				round_result.innerText = "something's wrong in case rock";
			}
			break;

		case "paper":
			if(computerSelection == "rock")
			{
				round_result.innerText = "You win this round";
				user++;
			}
			else if(computerSelection == "paper")
			{
				round_result.innerText = "This round is a tie";
			}
			else if(computerSelection == "scissors")
			{
				round_result.innerText = "PC wins this round";
				pc++;
			}
			else
			{
				round_result.innerText = "something's wrong in case paper";
			}
			break;
		case "scissors":
			if(computerSelection == "rock")
			{
				round_result.innerText = "PC wins this round";
				pc++;
			}
			else if(computerSelection == "paper")
			{
				round_result.innerText = "You win this round";
				user++;
			}
			else if(computerSelection == "scissors")
			{
				round_result.innerText = "This round is a tie";
			}
			else
			{
				round_result.innerText = "something's wrong in case scissors";
			}
			break;
	}
}


function score(user, pc)
{

	if(user > pc)
	{
		result.innerText = `You win the game`;
	}

	else if(pc > user)
	{
		result.innerText = `PC wins the game`;
	}
	else
	{
		result.innerText = `This game is a tie`;
	}

}


function game(player_choice)
{	
	if(round == 0)
	{
		result.innerText = ` `;
	}	
	round++;
	computer_choice = computerPlay();
	playRound(player_choice, computer_choice);
	scores.innerText = `Score:
	Round: "${round}"
	PC :"${pc}"
 	User : "${user}"`;

 	if(pc == 5 || user == 5)
	{
 		score(user, pc);
 		round = 0;
		pc = 0;
		user = 0;
 	}

}

//the problem with the code currently is that after completion of rounds the result text still remains and only changes when
//something else comes but what we want instead is to clear the whole thing when a new game begins
//problem solved by putting if condition inside the game function