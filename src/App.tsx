import { useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import Word from "./components/word";
import type { GameStatus } from "./types";
import { WORDS } from "./words";

function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const [status, setStatus] = useState<GameStatus>("playing");
  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWordToGuess(randomWord.toUpperCase());
  }, []);
  useEffect(() => {
    if (wordToGuess && guessedLetters.length > 0) {
      const isWinner = wordToGuess
        .split("")
        .every((letter) => guessedLetters.includes(letter));
      const isLoser = incorrectLetters.length >= 6;
      if (isWinner) setStatus("won");
      else if (isLoser) setStatus("lost");
    }
  }, [guessedLetters, wordToGuess]);
  const addGuessedLetter = (letter: string) => {
    const upperLetter = letter.toUpperCase();

    if (guessedLetters.includes(upperLetter) || status !== "playing") return;
    setGuessedLetters((current) => [...current, upperLetter]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        addGuessedLetter(key);
      }
    };
    if (status === "playing") {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters, status]);
  return (
    <div className="">
      <h1 className="title">The Hangman Game</h1>

      <HangmanDrawing incorrectCount={incorrectLetters.length} />
      <Word
        word={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={status !== "playing"}
        isLoser={status === "lost"}
        isWinner={status === "won"}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        onClick={addGuessedLetter}
        disabled={status !== "playing"}
      />
    </div>
  );
}

export default App;
