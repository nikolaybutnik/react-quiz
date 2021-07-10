// enums allow storage of keywords and associate them with numeric values
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  // first, log out what you get back from fetching, then set the type of the funtion's return
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
  // double await: first await the result of the fetch, then await json conversion
  const data = await (await fetch(endpoint)).json()
  console.log(data)
}
