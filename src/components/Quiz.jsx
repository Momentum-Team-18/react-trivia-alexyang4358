import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";
import Answers from "./Answers";
import he from "he";

function Quiz({ categoryID, categories, onPage }) {
  const catURL = `https://opentdb.com/api.php?amount=10&category=${categoryID}`;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    axios.get(catURL).then((response) => setQuestions(response.data.results));
  }, [categoryID]);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1, onPage);
    console.log((onPage = ""));
  };

  const handleGoBack = () => {
    setQuestions("");
  };

  return (
    <>
      {questions.length > 0 ? (
        <section className="slide">
          <div className="content">
            <h1 className="title">
              {he.decode(questions[currentQuestion].question)}
            </h1>
            <Answers
              onPage={onPage}
              questions={questions}
              currentQuestion={currentQuestion}
            />
            <div className="content">
              <button className="button" onClick={handleGoBack}>
                Go Back
              </button>
              <button
                className="button"
                onClick={handleNextQuestion}
                disabled={currentQuestion === questions.length - 1}
              >
                Next Question
              </button>
              <div>{onPage}</div>
            </div>
          </div>
        </section>
      ) : (
        <Category categories={categories} />
      )}
    </>
  );
}

export default Quiz;

// set a state of score for the 10 questions
// update score state after each question
