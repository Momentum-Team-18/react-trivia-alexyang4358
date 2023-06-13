import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Category from './Category'


function Quiz( {categoryID, categories} ) {
    const catURL = `https://opentdb.com/api.php?amount=10&category=${categoryID}`
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
    axios.get(catURL).then((response) => setQuestions(response.data.results))}, [categoryID])


    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
    }

    const handleGoBack = () => {
        setQuestions(questions.length > 0)
    }

    console.log(questions)

    return (
    <>
    {questions.length > 0 ? (
    <section className='slide'>
        <div className='content'>
            <h1 className='title'>{questions[currentQuestion].question}</h1>
            <button className='button'>{questions[currentQuestion].correct_answer}</button>
            <button className='button'>{questions[currentQuestion].incorrect_answers[0]}</button>
            <button className='button'>{questions[currentQuestion].incorrect_answers[1]}</button>
            <button className='button'>{questions[currentQuestion].incorrect_answers[2]}</button>
        </div>
        <div className='content'>
        <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>Next Question</button>
        <button onClick={handleGoBack}>Go Back</button>
        </div>
    </section>): (<Category categories={categories} />)}
    </>
    )
}

export default Quiz

{/* <div>
{questions.map(question => (
    <ul key={question.id}>
        <p>{question.question}</p>
        <p>{question.difficulty}</p>
    </ul>
))}
</div> */}