import React, { useState } from 'react'
import { fetchQuizQuestions } from './API'
// Components
import QuestionCard from './components/QuestionCard'
// Types
import { QuestionState, Difficulty } from './API'

const TOTAL_QUESTIONS = 10

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const App = () => {
  const [number, setNumber] = useState(0)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [loading, setLoading] = useState(false)
  const [gameOver, setGameOver] = useState(true)
  const [score, setScore] = useState(0)

  console.log(questions)

  // reset the game
  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)

    setLoading(false)
  }

  const nextQuestion = () => {}

  const checkAnswer = () => {}

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score:</p> : null}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  )
}

export default App
