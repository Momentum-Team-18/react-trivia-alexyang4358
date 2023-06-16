import { useState } from "react";
import React from "react";
import he from "he";
import arrayShuffle from "shuffle-array";
import Quiz from "./Quiz";

function Answers({ questions, currentQuestion }) {
  const [theRightAnswer, setTheRightAnswer] = useState("");
  const [theWrongAnswer, setTheWrongAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [onPage, setOnPage] = useState("");

  const newArray = arrayShuffle([
    questions[currentQuestion].correct_answer,
    ...questions[currentQuestion].incorrect_answers,
  ]);

  const correctAnswer = questions[currentQuestion].correct_answer;

  console.log(correctAnswer);

  const handleAnswer = (clickedAnswer) => {
    if (clickedAnswer === correctAnswer) {
      setScore(score + 1);
      setOnPage("Good Job, that was right.");
    } else {
      setOnPage("That was wrong.");
    }
  };

  return (
    <>
      {/* Mapped through array of answers for each instance of questions. Displayed them as buttons. */}
      {newArray.map((answer, index) => (
        <button
          onClick={() => handleAnswer(answer)}
          className="button"
          key={answer}
        >
          {he.decode(answer, index)}
        </button>
      ))}
      <h2>This is your score: {score}</h2>
      <h3>{onPage}</h3>
    </>
  );
}

export default Answers;

// console.log({ questions });
// console.log({ currentQuestion });
// console.log(newArray);

// if the right answer is clicked display this
// if the wrong answer is clicked display something else
// onPage refresh
