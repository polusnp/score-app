import ButtonAdd from "./ButtonAdd"

function AddScore(props) {
  const { addScore } = props
  return (
    <>
      <div className="inter-score"></div>
      <div className="add-score-container">
        <h1>Add points</h1>
        <div className="score-buttons">
          <ButtonAdd number={1} addScore={addScore} />
          <ButtonAdd number={5} addScore={addScore} />
          <ButtonAdd number={10} addScore={addScore} />
        </div>
      </div>
    </>
  )
}

export default AddScore
