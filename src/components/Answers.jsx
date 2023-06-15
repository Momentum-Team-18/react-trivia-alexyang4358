import { useState } from "react";
import React from "react";
import he from "he";

function Answers({ questions, currentQuestion }) {
  // console.log({ questions });
  // console.log({ currentQuestion });
  // console.log(newArray);

  // useState hooks required: [score, setScore] = (0) | [incorrectAnswers, setIncorrectAnswers] = ([])
  // [correctAnswer, setCorrectAnswer] = ()

  // answers need to shuffle those answers (import shuffle)
  // compare user selection with correct answer
  // if user gets answer correct show 'good job' otherwise show 'incorrect'/move to next question

  //if the button click is = to the currentquestion.correct_answer we will return 'good job' or return 'that was wrong'
  // correctAnswer, setCorrectAnswer = ()
  // onclick function and pass in handleCorrectAnswer
  // setCorrectAnswer(correctAnswer === correctAnswer)

  const newArray = [
    questions[currentQuestion].correct_answer,
    ...questions[currentQuestion].incorrect_answers,
  ];

  const correctAnswer = questions[currentQuestion].correct_answer;

  const handleAnswer = (clickedAnswer) => {
    console.log("this is the", { clickedAnswer });
  };

  return (
    <>
      {/* map through array of incorrect answers and display the answers as buttons so we can click on them  */}
      {/* once a user clicks on an answer it will display 'correct' or 'wrong' and move to next question */}
      {/* update score state after each question and display correctly answered questions at the end 4/10*/}
      {newArray.map((answer) => (
        <button
          onClick={() => handleAnswer(answer)}
          className="button"
          key={answer}
        >
          {he.decode(answer)}
        </button>
      ))}
    </>
  );
}

export default Answers;
