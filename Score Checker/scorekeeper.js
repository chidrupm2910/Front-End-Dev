var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1score = 0;
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var p2score=0;
var resetButton = document.querySelector("#reset");
var gameOver = false;
var winningScore = 7;
var numberInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");


p1Button.addEventListener("click", function(){
	if(!gameOver){
	p1score++;
	if(p1score === winningScore){
		gameOver = true;
		p1Display.classList.add("winner");
	}
	p1Display.textContent = p1score;
}


});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
	if(p2score === winningScore){
		gameOver = true;
		p2Display.classList.add("winner");
	}	
     p2Display.textContent = p2score;
}

});


resetButton.addEventListener("click", function(){
	p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1score=0;
    p2score=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");

});
function reset(){
	p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1score=0;
    p2score=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

numberInput.addEventListener("change",function() {
   winningScoreDisplay.textContent = Number(this.value);
   winningScore = this.value;
	reset();// body...
});