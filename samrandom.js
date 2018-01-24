const guess = document.getElementById('my-guess');

const submit = document.getElementById('submit-guess');
const output = document.getElementById('output');



submit.addEventListener('click',checkGuess);
let clickTotal = 0;
const yourGuess = Number(guess.value);
function countClicks(){
  // if ((yourGuess < 1) || (yourGuess > 100)) {
  //   clickTotal;
  // } else {
  clickTotal++;
  console.log(`Clicks: ${clickTotal}`)
  if(clickTotal == 5) {
    alert("sorry your game is over!");
    submit.disabled = true;
    window.location.reload();
  }
}

function checkGuess(){
  const randomNumber = Math.floor(Math.random()*100 + 1);
  const yourGuess = Number(guess.value);
  if (yourGuess < 1 || yourGuess > 100) {
    alert('please pick a number between 1 and 100')
    output.remove();
  } else if(yourGuess == randomNumber) {
    output.textContent = "You got it!"
    
  } else if (yourGuess > randomNumber) {
    output.textContent = "Go lower!"
    yourGuess.value = '';
  } else {
    output.textContent = "Go higher!"
    yourGuess.value = '';
  }
}

