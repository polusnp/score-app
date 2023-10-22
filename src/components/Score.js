import ButtonReset from "./ButtonReset"
import CurrentScore from "./CurrentScore"

function Score() {
  return (
    <div className="score-container">
      <h1>Your score</h1>
      <div className="score-wrap">
        <CurrentScore />
        <ButtonReset />
      </div>
    </div>
  )
}

export default Score
