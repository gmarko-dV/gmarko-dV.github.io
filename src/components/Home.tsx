import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchTriviaQuestions } from '../services/triviaApi'
import type { TriviaQuestion } from '../types/trivia'

function Home() {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const data = await fetchTriviaQuestions()
        setQuestions(data.results.slice(0, 5)) // Mostrar solo 5 preguntas en el home
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

  return (
    <div className="container-fluid">
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <h1 className="hero-title">🎯 Trivia Challenge</h1>
          <p className="hero-description">
            Pon a prueba tus conocimientos con nuestra aplicación de trivia. 
            Responde preguntas de diferentes categorías y demuestra cuánto sabes.
          </p>
          <Link to="/entities" className="btn">
            Comenzar Trivia
          </Link>
        </div>
      </div>

      {/* Listado de Preguntas */}
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h2 className="questions-title">Preguntas Destacadas</h2>
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="card-grid">
            {questions.map((question, index) => (
              <div key={index} className="card">
                <div className="card-title">
                  Categoría: {decodeHtml(question.category)}
                </div>
                <div className="card-meta">
                  Dificultad: {question.difficulty}
                </div>
                <p className="card-text">{decodeHtml(question.question)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

