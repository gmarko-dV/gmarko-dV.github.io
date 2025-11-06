import { useEffect, useState } from 'react'
import { fetchTriviaQuestions } from '../services/triviaApi'
import type { TriviaQuestion } from '../types/trivia'

function Entities() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchTriviaQuestions()
        setQuestions(data.results)
        setLoading(false)
      } catch (error) {
        console.error('Error loading questions:', error)
        setLoading(false)
      }
    }
    loadQuestions()
  }, [])

  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer
    })
  }

  const getAnswerClass = (questionIndex: number, answer: string, correctAnswer: string) => {
    if (selectedAnswers[questionIndex] === answer) {
      return answer === correctAnswer ? 'selected-correct' : 'selected-incorrect'
    }
    return ''
  }

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="questions-section">
      <div className="container">
        <h1 className="questions-title">Preguntas de Trivia</h1>
        {questions.map((question, index) => {
          const allAnswers = shuffleArray([
            question.correct_answer,
            ...question.incorrect_answers
          ])
          
          return (
            <div key={index} className="question-card">
              <div className="question-header">
                <div className="question-number">
                  Pregunta {index + 1}
                </div>
                <div className="question-meta">
                  {decodeHtml(question.category)} - {question.difficulty}
                </div>
              </div>
              <p className="question-text">
                {decodeHtml(question.question)}
              </p>
              <div className="answers-grid">
                {allAnswers.map((answer, answerIndex) => (
                  <button
                    key={answerIndex}
                    className={`answer-btn ${getAnswerClass(index, answer, question.correct_answer)}`}
                    onClick={() => handleAnswerSelect(index, answer)}
                    disabled={!!selectedAnswers[index]}
                  >
                    {decodeHtml(answer)}
                  </button>
                ))}
              </div>
              {selectedAnswers[index] && (
                <div>
                  {selectedAnswers[index] === question.correct_answer ? (
                    <div className="feedback feedback-success">
                      ✓ ¡Correcto!
                    </div>
                  ) : (
                    <div className="feedback feedback-error">
                      ✗ Incorrecto. La respuesta correcta es: {decodeHtml(question.correct_answer)}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Entities

