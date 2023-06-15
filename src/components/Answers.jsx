import { useState } from "react";
import React from "react";
import he from "he";
import arrayShuffle from "shuffle-array";

function Answers({ questions, currentQuestion }) {
  const [theRightAnswer, setTheRightAnswer] = useState("");
  const [theWrongAnswer, setTheWrongAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [onPage, setOnPage] = useState("");

  // compare user selection with correct answer
  // if user gets answer correct show 'good job' otherwise show 'incorrect'/move to next question

  //if the button click is = to the currentquestion.correct_answer we will return 'good job' or return 'that was wrong'
  // correctAnswer, setCorrectAnswer = ()
  // onclick function and pass in handleCorrectAnswer
  // setCorrectAnswer(correctAnswer === correctAnswer)

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
      {/* once a user clicks on an answer it will display 'correct' or 'wrong' and move to next question */}
      {/* update score state after each question and display correctly answered questions at the end 4/10*/}

      {/* Mapped through array of answers for each instance of questions. Displayed them as buttons. */}
      {newArray.map((answer) => (
        <button
          onClick={() => handleAnswer(answer)}
          className="button"
          key={answer}
        >
          {he.decode(answer)}
        </button>
      ))}
      <p>{onPage}</p>
      <p>This is your score: {score}</p>
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
