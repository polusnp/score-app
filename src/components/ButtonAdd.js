import { useContext } from "react"
import { Context } from "../App"

function ButtonAdd(props) {
  const store = useContext(Context)
  const { number } = props
  return (
    <button
      className="score-button"
      onClick={() => {
        store.addScore(number)
      }}
    >
      {number}
    </button>
  )
}

export default ButtonAdd
