/*eslint-env browser*/
var score,activePlayer,roundScore, gamePlaying, prevDice;
init();
document.querySelector('#roll').addEventListener('click',rollDice);
document.getElementById('hold').addEventListener('click',hold);
document.getElementById('new').addEventListener('click',init);


function rollDice() {
    if(gamePlaying){
        var diceNum = Math.floor(Math.random()* 6) +1;        
        var diceNum2 = Math.floor(Math.random()* 6) +1;

        
        document.getElementById('dice').setAttribute("src", "dice-" + diceNum + ".png");       document.getElementById('dice2').setAttribute("src", "dice-" + diceNum2 + ".png");

        document.querySelector('#dice').style.display = 'block';       
        document.querySelector('#dice2').style.display = 'block';

        if(diceNum !== 1 && diceNum2 !== 1){
//            if(prevDice ===  6 && diceNum === 6){
//                score[activePlayer] =0
//                document.getElementById('totalScore-'+activePlayer).textContent = score[activePlayer];
//                nextPlayer();
//            }else{
//            roundScore += diceNum;              
            roundScore += diceNum + diceNum2;

//                prevDice = diceNum;
                document.querySelector('#score-'+activePlayer).textContent = roundScore;
//            }
            

        }else{
            
            nextPlayer();


        }
    }
   
    
}



function hold(){
     if(gamePlaying){
        score[activePlayer] += roundScore;
        document.getElementById('totalScore-'+activePlayer).textContent = score[activePlayer];
        var  input = document.querySelector('.input').value;
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        }
        if(score[activePlayer] >= winningScore){
            document.getElementById('player-'+activePlayer).textContent = 'WINNER!';
            document.querySelector('#dice').style.display = 'none';         
            document.querySelector('#dice2').style.display = 'none';

            document.querySelector(".player" + activePlayer).classList.remove("active");
            gamePlaying = false;

        }else{

            nextPlayer();
        }
     }
    
}
function nextPlayer(){
   
    roundScore = 0;
    prevDice = 0;
    document.getElementById('score-'+activePlayer).textContent = roundScore;
//    document.querySelector('#dice').style.display = 'none';
    document.querySelector(".player" + activePlayer).classList.remove("active");
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    document.querySelector(".player" + activePlayer ).classList.add("active");
    document.querySelector('#dice').style.display = 'none';   
    document.querySelector('#dice2').style.display = 'none';

}

function init(){
    score = [0 , 0];
    activePlayer = 0;
    roundScore = 0;
    prevDice = 0;
    gamePlaying = true;
 
    document.querySelector('#dice').style.display = 'none';    
    document.querySelector('#dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';   
    document.getElementById('totalScore-0').textContent = '0';
    document.getElementById('totalScore-1').textContent = '0';
    
    document.querySelector(".player0" ).classList.add("active");
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';


}