import { useState } from 'react';
import './App.css'
import { FlashCard } from './components/Flashcard';
import { Progessbar } from './components/Progessbar';
import { data} from './data/flashcards';
function App() {
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="app">
      <div className="app__content">
        <h2>Flash Card</h2>
        <Progessbar totalQuestions={data.length} current={index} />
        <FlashCard
          question={data[index].question}
          answer={data[index].answer}
          showAnswer={showAnswer}
          onShow={() => setShowAnswer(true)}
          onHide={() => setShowAnswer(false)}
          onPrev={() => {
            setShowAnswer(false)
            setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
          }}
          onNext={() => {
            setShowAnswer(false)
            setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
          }}
        />
      </div>
    </div>
  )
}
export default App
