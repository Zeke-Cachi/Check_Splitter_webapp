"use client"
import participantCardUtilities from "./participantCardUtilities";
import { ImArrowUp } from "react-icons/im";


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
    <div className={`flex flex-col ${finish ? "justify-around animate-custom " : "justify-between "} 
    ${finish ? "bg-yellow-100/[.95] border-yellow-300" : "bg-blue-900/[.95] border-blue-300"} mx-auto 
    my-[.5rem] bg-blue-900/[.95] w-[10rem] h-[14rem] rounded-xl border-[2px]
    text-center p-[.7rem] sm:w-[15rem] sm:h-[16rem] md:w-[15.5rem]`}>


      <form 
        onSubmit={hide}
        className={`${hideInput()} flex justify-center`}>
        <input 
          type="text" 
          placeholder="Write name here"
          onChange={handleSaveName}
          className="bg-white rounded-xl mt-[.7rem] w-[8rem] h-[2rem] text-[.9rem] italic text-center 
          text-blue-900 font-bold focus:border-blue-700 outline-none focus:outline-none border-blue-300 border-[1px]
          sm:w-[12rem] sm:h-[2.5rem] sm:text-[1.1rem]" />
      </form>

      <ImArrowUp className={`${hideInput()} animate-arrow text-yellow-100 h-[2rem] w-[2rem] mx-auto`} />

      <h5 className={`${hideInput()} text-yellow-100 italic md:px-[3rem]`}>Enter name and press Enter on your keyboard</h5>

      <h3 className={`${showName()} ${finish ? "text-blue-900" : "text-blue-100"} text-[1.2rem] font-bold
      sm:text-[1.5rem]`}>{saveName}</h3>

      <h6 className={`${showName()} ${finish ? "text-blue-900" : "text-blue-100"}  text-[1.8rem] font-bold
      sm:text-[2.2rem]`}>${Number(counter.toFixed(1))}</h6>

      <label className={`${showName()} ${finish ? "hidden" : "block"} text-[.8rem] 
      text-blue-100 sm:text-[.9rem]`}>Check here to add to the bill</label>
      
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`${showName()} ${finish ? "hidden" : "block"} checkbox checkbox-warning mx-auto w-[1rem] h-[1rem]`} />



      <button 
        className={`${showName()} ${finish ? "hidden" : "block"}  mx-auto w-[5rem] bg-blue-200 border-[2px] 
        border-blue-300 text-blue-900 hover:text-blue-950 text-[.9rem] font-bold 
        rounded-xl mx-auto hover:bg-blue-50 sm:w-[6rem]`}
        onClick={show}>Edit
      </button>

    </div>
  )
}

export default ParticipantCard