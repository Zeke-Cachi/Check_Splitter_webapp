"use client"
import { useState, useEffect } from "react"

const ParticipantCard = ({id, handleCheckedUsers, amount, items, setItems}) => {

  const [saveName, setSaveName] = useState("lkjhlkhlkjh");
  const [hideForm, setHideForm] = useState(true)
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = useState(0);

  //UPDATE THE AMOUNT OF EACH USER
  useEffect(() => {
    setCounter(prevCounter => isChecked ? prevCounter + amount : prevCounter);
  }, [amount]);

  //RESET THE CHECKBOX AFTER SUBMITTING PRODUCT
  useEffect( () => {
    setIsChecked(false)
  }, [amount])

  //RESETS THE AMOUNT TO 0 IF THE PRODUCS ARE ERASED
  useEffect( () => {
    items.length === 0 ? setCounter(0) : null
  }, [items])



  useEffect ( () => {
    localStorage.setItem(`name`, saveName)
  }, [saveName])

  useEffect ( () => {
    const storedName = localStorage.getItem(`name`)
    storedName ? setSaveName(storedName) : null
  },[])



  //CHECK IF THE CHECKBOX HAS BEEN CHECKED
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    handleCheckedUsers(id, checked);
  };


  const handleSaveName = (e) => {
    setSaveName(e.target.value)
  }

  const hide = (e) => {
    e.preventDefault()
    setHideForm(false)
  }

  const show = () => {
    setHideForm(true)
  }

  const showName = () => {
    return hideForm ? "hidden" : "block"
  }

  const hideInput = () => {
    return hideForm ? "block" : "hidden"
  }


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

      <div>Amount</div>
      <h6>{counter}</h6>

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