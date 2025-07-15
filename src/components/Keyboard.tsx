import "./Keyboard.css";
type Props = {
  guessedLetters: string[];
  onClick: (letter: string) => void;
  disabled?: boolean;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export default function Keyboard({ guessedLetters, onClick, disabled }: Props) {
  return (
    <div className="Keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onClick(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
          className={` letter ${
            guessedLetters.includes(letter) ? "guessed " : "letter "
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
