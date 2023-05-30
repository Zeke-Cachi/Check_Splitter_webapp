"use client"
import { useState } from "react";
import Link from 'next/link'

const Page = () => {

  const [users, setUsers] = useState(2)
  const [triggerPage, setTriggerPage] = useState(false)


  const checkAmount = (e) => {
    e.preventDefault(); 
    e.target.value > 10 || e.target.value < 2 ? alert('Please enter an amount between 2 and 10') : null;
    setTriggerPage(true)
  }

  const saveInput = (e) => {
    e.preventDefault()
    setUsers(parseInt(e.target.value))
  }

  const validateUserAmount = (e) => {
    users === 0 || users === 1 || users === undefined ?
    alert('You need to input 2 or more participants!') :
    null
  }
  

  return (
    <main className="bg-[url('/img/bg.jpg')] bg-center bg-contain grid place-items-center h-screen my-auto">
      <div className="border-[4px] border-blue-300 bg-blue-900/[.95] h-[40rem] w-[20rem] 
      px-[1rem] m-auto rounded-xl text-blue-100 sm:w-[30rem] md:w-[40rem]">
        
        <h1 className="text-[3rem] font-bold text-center mt-[2rem]">Zeke´s Bill Splitter</h1>

        <h2 className="text-[1.5rem] text-center mt-[4rem] font-thin">Enter the amount of people to participate</h2>

        <form 
          onSubmit={checkAmount}
          className="flex justify-center">
          <input 
          className="bg-white text-blue-900 focus:border-blue-700 outline-none focus:outline-none h-[4rem] 
          w-[7rem] rounded-lg mt-[2rem] text-[3rem] text-center border-[4px] border-blue-300 md:h-[5rem] md:w-[8rem]"
          type="number"
          onChange={saveInput} />
        </form>

        <div onClick={validateUserAmount}>
          <Link 
          className="h-[5rem] w-[10rem] bg-blue-200 mx-auto text-[2rem] text-blue-900 flex justify-center 
          items-center mt-[6rem] rounded-lg active:text-white"
          href={{
            pathname: '/pages/mainPage',
            query: { users: users }
          }}>Start!</Link>
        </div>
      </div>
    </main>
  );
};

export default Page;