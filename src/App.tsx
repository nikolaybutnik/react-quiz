import React, { useState } from 'react'
import { fetchQuizQuestions } from './API'
// Components
import QuestionCard from './components/QuestionCard'
// Types
import { Difficulty } from './API'

const TOTAL_QUESTIONS = 10

const App = () => {
  const [number, setNumber] = useState(0)
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = () => {}

  const nextQuestion = () => {}

  const checkAnswer = () => {}

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number]}
        answers={questions[number]}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
