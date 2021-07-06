const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = function () {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.StatusMessage;
  game1.Puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async function () {
  const puzzle = await getPuzzle(2);
  game1 = new Hangman(puzzle, 5);
  render();
};

startGame();

document.querySelector('#reset').addEventListener('click', startGame);