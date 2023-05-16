"use client"
import ParticipantCard from "./components/ParticipantCard"
import { useState } from "react"


const page = () => {
  const [userAmount, setUserAmount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitForm, setSubmitForm] = useState(false)
  const [data, setData] = useState({
    item: '', 
    price: 0,
  })

  const handleChange = (e) => {
    e.target.value <= 10 ? setUserAmount(parseInt(e.target.value)) : alert("No more than 10 people!");
  };

  const handleForms = (e) => {
    e.preventDefault()
    let numberOrString = parseInt(e.target.value);
    numberOrString == NaN ? setData( prevData => ({
      ...prevData, 
      item: e.target.value
    })) :
    setData( prevData => ({
      ...prevData,
      price: e.target.value
    }))
  }

//CHANGE THE STATE TO SHOW OR HIDE ELEMENTS
  const isSubmittedTrue = (e) => {
    e.preventDefault();
    userAmount < 2 ? alert('Please enter a number between 2 and 10') : setIsSubmitted(true);
  };

  const isSubmittedFalse = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
  };

//SHOW OR HIDE ELEMENTS
  const hideElements = (isSubmitted) => (isSubmitted ? "hidden" : null);
  const showElements = (isSubmitted) => (isSubmitted ? null : "hidden");


  const handleHideForms = (e) => {
    e.preventDefault();
    setSubmitForm(true)
  };

  const handleShowForms = (e) => {
    e.preventDefault();
    setSubmitForm(false);
  };

//SHOW OR HIDE FORMS
  const hideForms = (submitForm) => (submitForm ? "hidden" : null);
  const showForms = (submitForm) => (!submitForm ? "hidden" : null);





  return (
    <>
      <h1>Zeke´s Bill Splitter</h1>

      <h2 className={hideElements(isSubmitted)}>Enter the amount of people</h2>

      <form className={hideElements(isSubmitted)} onSubmit={isSubmittedTrue}>
        <input
          type="text"
          className="h-[3rem] w-[10rem] border-[3px] border-yellow-500 placeholder:text-black"
          onChange={handleChange}
        />
      </form>
      <button className={hideElements(isSubmitted)} onClick={isSubmittedTrue}>
        Submit
      </button>

      <div className={showElements(isSubmitted)}>
        <h3>Add item</h3>
        
        <form className={hideForms(submitForm)}>
          <input 
            className="border-[3px] border-blue-300" 
            type="text"
            placeholder="add item"
            onChange={handleHideForms}/>
        </form>

        <form className={showForms(submitForm)}>
          <input 
            className="border-[3px] border-blue-300" 
            type="text"
            placeholder="add amount"
            onChange={handleShowForms}/>
        </form>
        
      </div>

      {isSubmitted ? (
        <div>
          {Array.from({ length: userAmount }, (_, i) => (
            <ParticipantCard key={i} hideElements={hideElements} showElements={showElements} />
          ))}
        </div>
      ) : null}

      <button className={showElements(isSubmitted)} onClick={isSubmittedFalse}>
        Edit
      </button>
    </>
  );
};

export default page;