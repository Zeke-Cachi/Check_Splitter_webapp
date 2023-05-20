"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
//LIBRARIES
import { Popover, Transition } from '@headlessui/react'
import Swal from 'sweetalert2'
//COMPONENTS
import ParticipantCard from '../../components/ParticipantCard'

const MainPage = () => {

  const searchParams = useSearchParams();
  const userAmount = searchParams.get('users')
  const cleanRef = useRef(null)
  
  //USESTATE TO HANDLE THE PRODUCTS
  const [items, setItems] = useState([])
  const [storeItems, setStoreItems] = useState({
    name: "",
    price: 0
  })

  //CHECK HOW MANY USERS ARE TO CHARGE
  const [checkedUser, setCheckedUser] = useState([])

  const [amount, setAmount] = useState(0)
  

  const handleCheckedUsers = (userId, checked) => {
    checked ?
    setCheckedUser((prevCheckedUsers) => [...prevCheckedUsers, userId]) :
    setCheckedUser((prevCheckedUsers) => prevCheckedUsers.filter( (id) => id !== userId))
  }

  //SAVES THE PRODUCTS DATA IN LOCAL STORAGE SO YOU DON´T LOSE THEM ON REFRESH
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  //RENDERS THE USER CARDS
  const renderUsers = () => {
    return Array.from({ length: userAmount }, (_, i) => (
      <ParticipantCard 
        key={i} 
        id={i} 
        handleCheckedUsers={handleCheckedUsers}
        amount={amount}/>
    ));
  }


  //STORES ITEMS AND PRICE IN A STATE
  const handleItemInput = (e) => {
    e.preventDefault();
    setStoreItems(storeItems => ({...storeItems, name: e.target.value}))
  }

  const handlePriceInput = (e) => {
    e.preventDefault();
     setStoreItems(storeItems => ({...storeItems, price: e.target.value}))
  }


  //STORES THE ITEMS IN AN ARRAY
  const handleItemSubmit = (e) => {
    e.preventDefault()
    setItems( prevItems => (
    [...prevItems, 
      storeItems
    ]))
    cleanRef.current.reset();
    Swal.fire('Product added!')
    setAmount(Number(storeItems.price) / checkedUser.length)

    
  }

  //DELETES ALL PRODUCTS
  const eraseItems = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('items');
        setItems([])
        console.log(items)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  

  return (
    
    <main>
      {/* POPOVER FOR THE PRODUCTS LIST */}
      <Popover className="relative">
        <Popover.Button>View products</Popover.Button>

        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0">
        
          <Popover.Panel className="absolute z-10 w-[20rem] h-[20rem] bg-purple-300">
              {items.map( (products,i) => {
                return (
                <div key={i}>
                  <p>Product: {products.name}</p>
                  <p>Price: {products.price}</p>
                </div>)
              })}
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* BUTTON TO ERASE ALL PRODUCTS */}
      <button onClick={eraseItems}>
        Erase Products
      </button>

      
      <div className={`h-[15rem] w-[8rem] bg-blue-300 mx-auto`}>
        <label>enter Item and Price</label>
        <form 
          onSubmit={handleItemSubmit}
          ref={cleanRef}>
          <input 
            type="text" 
            placeholder='enter Item'
            onChange={handleItemInput}/>

          <input 
            type="number" 
            placeholder='enter amount'
            onChange={handlePriceInput} />
          <button>Submit</button>
        </form>
      </div>

      {renderUsers()}

    </main>
    
  )
}

export default MainPage