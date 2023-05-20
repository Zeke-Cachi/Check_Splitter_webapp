"use client"
import { useState } from "react";
import Link from 'next/link'

const Page = () => {

  const [users, setUsers] = useState(0)

  const checkAmount = (e) => {
    e.preventDefault(); 
    e.target.value > 10 || e.target.value < 2 ? alert('Please enter an amount between 2 and 10') : setUsers(parseInt(e.target.value))
  }

  const saveInput = (e) => {
    e.preventDefault()
    setUsers(parseInt(e.target.value))
  }
  

  return (
    <>
      <h1>Zeke´s Bill Splitter</h1>

      <h2>Enter the amount of people</h2>

      <form onSubmit={checkAmount}>
        <input 
        type="number"
        onChange={saveInput} />
      </form>

      <Link 
      href={{
        pathname: '/pages/mainPage',
        query: { users: users }
      }}>Go to main</Link>
    </>
  );
};

export default Page;