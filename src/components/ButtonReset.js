import { useContext } from "react"
import { Context } from "../App"

function ButtonReset() {
  const store = useContext(Context)
  const handleReset = () => {
    store.setScore(0)
  }

  return (
    <button onClick={handleReset} className="score-button">
      RESET
    </button>
  )
}

export default ButtonReset
