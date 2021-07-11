import { shuffleArray } from './utils'

// enums allow storage of keywords and associate them with numeric values
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

// Default description of the information received from the API
export type Question = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

// Uses types from Question, but adds another property
export type QuestionState = Question & {
  answers: string[]
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  // first, log out what you get back from fetching, then set the type of the funtion's return
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  // double await: first await the result of the fetch, then await json conversion
  const data = await (await fetch(endpoint)).json()
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }))
}
