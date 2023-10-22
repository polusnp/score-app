import ButtonAdd from "./ButtonAdd"

function AddScore() {
  return (
    <>
      <div className="inter-score"></div>
      <div className="add-score-container">
        <h1>Add points</h1>
        <div className="score-buttons">
          <ButtonAdd number={1} />
          <ButtonAdd number={5} />
          <ButtonAdd number={10} />
        </div>
      </div>
    </>
  )
}

export default AddScore
