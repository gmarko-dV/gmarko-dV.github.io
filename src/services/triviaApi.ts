import type { TriviaResponse } from '../types/trivia'

const API_URL = 'https://opentdb.com/api.php?amount=10'

export const fetchTriviaQuestions = async (): Promise<TriviaResponse> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Error al obtener las preguntas')
    }
    const data: TriviaResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching trivia:', error)
    throw error
  }
}

