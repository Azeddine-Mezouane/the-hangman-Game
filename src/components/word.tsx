import "./word.css";

type Props = {
  word: string;
  guessedLetters: string[];
  reveal?: boolean;
  isLoser?: boolean;
  isWinner?: boolean;
};
export default function Word({
  word,
  guessedLetters,
  reveal = false,
  isLoser,
  isWinner,
}: Props) {
  console.log("word.tsx : ", word);
  console.log("word.tsx guessedLetters : ", guessedLetters);
  console.log("word.tsx reveal : ", reveal);
  return (
    <div className="wordDiv">
      {word.split("").map((letter, i) => (
        <span
          key={i}
          className={`span ${reveal && isLoser ? "text-red" : ""}
        ${reveal && isWinner ? "text-green" : ""}`}
        >
          {guessedLetters.includes(letter.toUpperCase()) || reveal
            ? letter
            : "_"}
        </span>
      ))}
    </div>
  );
}
