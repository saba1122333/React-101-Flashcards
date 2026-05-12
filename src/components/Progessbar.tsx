
import './Progessbar.css'

type ProgessbarProps = {
  totalQuestions: number
  current: number
}

export function Progessbar({ totalQuestions, current }: ProgessbarProps) {
  const progress = ((current + 1) / totalQuestions) * 100

  return (
    <div className="progessbar">
          <div className="progessbar__meta">
        <span>
                  {progress} %
        </span>
        <span>
          {current + 1} of {totalQuestions}
        </span>
      </div>

      <div className="progessbar__track">
        <div className="progessbar__fill" style={{ width: `${progress}%` }} />
        
      </div>
    </div>
  )
}