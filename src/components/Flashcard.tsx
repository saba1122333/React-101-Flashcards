import './FlashCard.css'

type FlashcardProps = {
  question: string
  answer: string
  showAnswer: boolean
  onShow: () => void
  onHide: () => void
  onPrev: () => void
  onNext: () => void
}

export function FlashCard({
  question,
  answer,
  showAnswer,
  onShow,
  onHide,
  onPrev,
  onNext,
}: FlashcardProps) {
  return (
    <div className="flash-card">
      <div className="flash-card-text">
        <p className="flash-card__label">Question</p>
        <h1 className="flash-card__text">{question}</h1>
        {showAnswer && <p className="flash-card__answer">{answer}</p>}
      </div>

      <div className="flash-card-buttons">
        <div className="flash-card__actions">
          <button className="flash-card__button" onClick={onPrev}>
            {'<'} Previous
          </button>

          {showAnswer ? (
            <button className="flash-card__button" onClick={onHide}>
              Hide Answer
            </button>
          ) : (
            <button className="flash-card__button" onClick={onShow}>
              Show Answer
            </button>
          )}

          <button className="flash-card__button" onClick={onNext}>
            Next {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}