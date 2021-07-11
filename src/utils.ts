import { maxHeaderSize } from 'http'

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5)
