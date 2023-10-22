import "./App.css"
import AddScore from "./components/AddScore"
import Score from "./components/Score"
import { createContext, useState } from "react"

export const Context = createContext()

function App() {
  const [score, setScore] = useState(100)

  const addScore = (number) => {
    setScore(score + number)
  }
  const value = {
    score,
    setScore,
    addScore,
  }
  return (
    <Context.Provider value={value}>
      <div className="App">
        <Score />
        <AddScore />
      </div>
    </Context.Provider>
  )
}

export default App
