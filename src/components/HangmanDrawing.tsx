import "./HangmanDrawing.css";

type Props = {
  incorrectCount: number;
};

export default function HangmanDrawing({ incorrectCount }: Props) {
  return (
    <div className="hangman-container">
      {/* Dessin du bonhomme */}
      {incorrectCount > 0 && <div className="head" />}
      {incorrectCount > 1 && <div className="body" />}
      {incorrectCount > 2 && <div className="left-arm" />}
      {incorrectCount > 3 && <div className="right-arm" />}
      {incorrectCount > 4 && <div className="left-leg" />}
      {incorrectCount > 5 && <div className="right-leg" />}

      {/* Structure de la potence */}
      <div className="gallow-top" />
      <div className="gallow-vertical-top" />
      <div className="gallow-rope" />
      <div className="gallow-base" />
      <div className="gallow-vertical" />
    </div>
  );
}
