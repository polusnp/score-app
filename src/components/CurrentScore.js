import { useContext } from "react"
import { Context } from "../App"

function CurrentScore() {
  const store = useContext(Context)
  return <div className="score">{store.score}</div>
}

export default CurrentScore
