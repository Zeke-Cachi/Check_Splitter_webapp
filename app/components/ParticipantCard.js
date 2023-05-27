"use client"
import participantCardUtilities from "./participantCardUtilities";


const ParticipantCard = ({id, handleCheckedUsers, amount, items, finish}) => {

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
    <div className={`flex flex-col ${finish ? "justify-around" : "justify-between "} 
    ${finish ? "bg-yellow-100/[.95] border-yellow-300" : "bg-blue-900/[.95] border-blue-300"} mx-auto 
    my-[.5rem] bg-blue-900/[.95] w-[10rem] h-[14rem] rounded-xl border-[2px]
    text-center p-[.7rem]`}>

      <form 
        onSubmit={hide}
        className={`${hideInput()} flex justify-center`}>
        <input 
          type="text" 
          placeholder="Write name here"
          onChange={handleSaveName}
          className="rounded-xl mt-[.7rem] w-[8rem] h-[2rem] text-[.9rem] italic text-center 
          text-blue-900 font-bold" />
      </form>

      <h3 className={`${showName()} ${finish ? "text-blue-900" : "text-blue-100"} text-[1.2rem] font-bold`}>{saveName}</h3>

      <h6 className={`${showName()} ${finish ? "text-blue-900" : "text-blue-100"}  text-[1.8rem] font-bold`}>${Number(counter.toFixed(2))}</h6>

      <label className={`${showName()} ${finish ? "hidden" : "block"} text-[.8rem] text-blue-100 `}>Check here to add to the bill</label>
      
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`${showName()} ${finish ? "hidden" : "block"} checkbox checkbox-warning mx-auto w-[1rem] h-[1rem]`} />



      <button 
        className={`${showName()} ${finish ? "hidden" : "block"}  mx-auto w-[5rem] bg-blue-200 border-[2px] 
        border-blue-300 text-blue-900 hover:text-blue-950 text-[.9rem] font-bold 
        rounded-xl mx-auto hover:bg-blue-50`}
        onClick={show}>Edit
      </button>

    </div>
  )
}

export default ParticipantCard