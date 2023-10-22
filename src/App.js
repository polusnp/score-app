import "./App.css"
import AddScore from "./components/AddScore"
import Score from "./components/Score"
import { useState } from "react"

function App() {
  const [score, setScore] = useState(100)

  const addScore = (number) => {
    setScore(score + number)
  }
  return (
    <div className="App">
      <Score score={score} setScore={setScore} />
      <AddScore addScore={addScore} />
    </div>
  )
}

export default App
