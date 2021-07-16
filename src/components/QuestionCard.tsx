import React from 'react'
import { AnswerObject } from '../App'

type Props = {
  question: string
  answers: string[]
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void // void means the function does not return a value
  userAnswer: AnswerObject | undefined // can be underfined if no user answers have yet been given
  questionNumber: number
  totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <button
          key={answer}
          // disable if user answer was given. the prop passed in is userAnswers[number].
          // !! coerces the value into boolean. can acheive the same with ternary operator.
          disabled={!!userAnswer}
          value={answer}
          onClick={callback}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
      ))}
    </div>
  </div>
)

export default QuestionCard
