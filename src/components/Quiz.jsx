import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


function Quiz( {categoryID} ) {
    const catURL = `https://opentdb.com/api.php?amount=10&category=${categoryID}`
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect(() => {
    axios.get(catURL).then((response) => setQuestions(response.data.results))}, [])

    return (
    <>
        <p>Hi, Quiz component</p>
        <div>
            {questions.map(question => (
                <ul key={question.id}>
                    <p>{question.question}</p>
                    <p>{question.difficulty}</p>
                </ul>
            ))}
        </div>
    </>
    )
}

export default Quiz

