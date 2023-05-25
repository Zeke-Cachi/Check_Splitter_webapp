"use client"
import participantCardUtilities from "./participantCardUtilities"

const ParticipantCard = ({id, handleCheckedUsers, amount, items, handleFinish}) => {

  const {
    handleCheckboxChange,
    handleSaveName,
    hide,
    show,
    showName,
    hideInput,
    saveName,
    counter,
    isChecked
  } = participantCardUtilities(id, handleCheckedUsers, amount, items);

  return (
    <div className="bg-red-200 text-black w-[15rem] h-[10rem] border-[1px] border-purple-500 m-[1rem]">

      <form 
        onSubmit={hide}
        className={`${hideInput()}`}>
        <input 
          type="text" 
          placeholder="Write name here"
          onChange={handleSaveName} />
      </form>

      <h3 className={`${showName()}`}>{saveName}</h3>

      <div className={`${showName()}`}>Amount</div>
      <h6 className={`${showName()}`}>${Number(counter.toFixed(2))}</h6>

      <label className={`${showName()}`}>Check here to add to the bill</label>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`${showName()}`} />

      <button 
        className={`${showName()}`}
        onClick={show}>Edit
      </button>

    </div>
  )
}

export default ParticipantCard