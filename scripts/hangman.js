class Hangman {
  constructor(word = [], remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  calculateStatus() {
    const finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === ' '
    );
    if (this.remainingGuesses === 0) this.status = 'failed';
    if (finished) this.status = 'finished';
    if (this.remainingGuesses > 0 && !finished) this.status = 'playing';
  }

  get Puzzle() {
    let puzzle = '';

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === ' ')
        puzzle += letter;
      else puzzle += '*';
    });

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== 'playing') return;
    // if (isUnique) this.guessedLetters.push(guess);
    if (isUnique) this.guessedLetters = [...this.guessedLetters, guess];
    if (isUnique && isBadGuess) this.remainingGuesses--;
    this.calculateStatus();
  }

  get StatusMessage() {
    if (this.status === 'playing')
      return `Guesses left: ${this.remainingGuesses}`;
    if (this.status === 'failed')
      return `Nice try! the word was "${this.word.join('')}"`;
    if (this.status === 'finished') return `Great work! You guessed the word.`;
  }
}