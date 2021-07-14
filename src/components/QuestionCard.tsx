import React from 'react'

type Props = {
  question: string
  answers: string[]
  callback: any
  userAnswer: any
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
          disabled={userAnswer} // disable if user answer was given. the prop passed in is userAnswers[number]
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
