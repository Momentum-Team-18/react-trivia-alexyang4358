import { useState } from "react";
import React from "react";
import he from "he";

function Answers({ questions, currentQuestion }) {
  console.log({ questions });
  console.log({ currentQuestion });
  // useState hooks required: [score, setScore] = (0) | [incorrectAnswers, setIncorrectAnswers] = ([])
  // [correctAnswer, setCorrectAnswer] = ()

  // answers need to shuffle those answers (import shuffle)
  // compare user selection with correct answer
  // if user gets answer correct show 'good job' otherwise show 'incorrect'/move to next question

  const [showAnswers, setShowAnswers] = [];

  // console.log(questions[currentQuestion].correct_answer);

  const correctAnswer = questions[currentQuestion].correct_answer;

  const newArray = [
    questions[currentQuestion].correct_answer,
    ...questions[currentQuestion].incorrect_answers,
  ];

  console.log(newArray);

  return (
    <>
      {/* map through array of incorrect answers and display the answers as buttons so we can click on them  */}
      {/* once a user clicks on an answer it will display 'correct' or 'wrong' and move to next question */}
      {/* update score state after each question and display correctly answered questions at the end 4/10*/}
      {newArray.map((answer) => (
        <button className="button" key={answer}>
          {he.decode(answer)}
        </button>
      ))}
    </>
  );
}

export default Answers;
