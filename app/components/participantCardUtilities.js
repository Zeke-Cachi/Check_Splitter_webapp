'use client'
import { useState, useEffect } from 'react';


const participantCardUtilities = (id, handleCheckedUsers, amount, items) => {
  
  const [saveName, setSaveName] = useState("");
  const [hideForm, setHideForm] = useState(true)
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = useState(0);



  //UPDATE THE AMOUNT OF EACH USER
  useEffect(() => {
    setCounter(prevCounter => isChecked ? prevCounter + amount : prevCounter);
  }, [items]);

  //RESET THE CHECKBOX AFTER SUBMITTING PRODUCT
  useEffect( () => {
    setIsChecked(false)
  }, [items])

  //RESETS THE AMOUNT TO 0 IF THE PRODUCS ARE ERASED
  useEffect( () => {
    !items ? null : items.length === 0 ? setCounter(0) : null
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
        {
            handleCheckboxChange,
            handleSaveName,
            hide,
            show,
            showName,
            hideInput, 
            saveName, 
            counter,
            isChecked
        }
  )
}

export default participantCardUtilities