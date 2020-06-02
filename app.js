let min = 1,
  max = 10,
  winningguess = getrandom(min, max);
guessleft = 3;
score = 0;

const game = document.querySelector(".game");
const guessinput = document.querySelector(".guessinput");
const guessbtn = document.querySelector(".guessbtn");
const minNum = document.querySelector(".minNum");
const maxNum = document.querySelector(".maxNum");
const msg = document.querySelector(".msg");
const playagain = document.querySelector(".playagain");

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "playagain") {
    window.location.reload();
  }
});
guessbtn.addEventListener("click", guessNum);

function guessNum(e) {
  let val = parseInt(guessinput.value);

  if (val < min || val > max || isNaN(val)) {
    textMessage(`please enter value between ${min} and ${max}`, "red");
  } else {
    guessleft -= 1;
    if (guessleft === 0) {
      guessinput.disabled = true;
      guessinput.style.borderColor = "red";
      textMessage(`YOU LOST!!. THE CORRECT GUESS IS ${winningguess} `, "red");

      guessbtn.value = "PLAY AGAIN";
      guessbtn.className = "playagain";
    } else {
      if (val < winningguess) {
        guessinput.value = "";
        guessinput.style.borderColor = "red";

        textMessage(
          `NOT CORRECT!!.${guessleft} GUESSES LEFT. GUESS HIGH `,
          "red"
        );
      } else {
        guessinput.value = "";
        guessinput.style.borderColor = "red";

        textMessage(
          `NOT CORRECT!!.${guessleft} GUESSES LEFT. GUESS LOW `,
          "red"
        );
      }
    }
  }
  if (val === winningguess) {
    guessinput.disabled = true;
    guessinput.style.borderColor = "green";
    textMessage(
      `HURRAY!! YOU WIN . THE CORRECT GUESS IS ${winningguess}`,
      "green"
    );
    score += 1;
    console.log(score);
    guessbtn.value = "PLAY AGAIN";
    guessbtn.className = "playagain";
  }
  e.preventDefault();
}
function textMessage(mssg, col) {
  msg.textContent = mssg;
  msg.style.color = col;
}
function getrandom(min, max) {
  return Math.floor(Math.random() * 10 + 1);
}
