function ButtonAdd(props) {
  const { number, addScore } = props
  return (
    <button
      className="score-button"
      onClick={() => {
        addScore(number)
      }}
    >
      {number}
    </button>
  )
}

export default ButtonAdd
