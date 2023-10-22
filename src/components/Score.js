function Score(props) {
  const { score, setScore } = props
  const handleReset = () => {
    setScore(0)
  }

  return (
    <div className="score-container">
      <h1>Your score</h1>
      <div className="score-wrap">
        <div className="score">{score}</div>
        <button onClick={handleReset} className="score-button">
          RESET
        </button>
      </div>
    </div>
  )
}

export default Score
