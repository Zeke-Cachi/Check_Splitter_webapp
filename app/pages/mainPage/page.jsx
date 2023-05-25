"use client"
import React from 'react'
//LIBRARIES
import { Popover, Transition } from '@headlessui/react'
import  MainPageUtilities  from './mainPageUtilities'

const MainPage = () => {

  //IMPORT ALL FUNCTIONS AND HOOKS
  const { 
    renderUsers, 
    handleItemInput, 
    handlePriceInput, 
    handleItemSubmit, 
    eraseItems,
    items, 
    cleanRef,
    } = MainPageUtilities();

  return (
    
    <main className="bg-[url('/img/bg.jpg')] bg-center bg-contain pt-[1rem]">
      {/* POPOVER FOR THE PRODUCTS LIST */}
      <div className='flex justify-around mb-[3rem]'>
        <Popover className="relative bg-blue-900/[.95] h-[2.5rem] w-[8.5rem] rounded-xl text-blue-100 
        text-center grid place-items-center border-[1px] border-blue-300 font-bold p-[0.5rem]">
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
        <button 
          onClick={eraseItems}
          className="bg-blue-900/[.95] h-[2.5rem] w-[8.5rem] rounded-xl text-blue-100 
        text-center grid place-items-center border-[1px] border-blue-300 font-bold p-[0.5rem]">
          Erase Products
        </button>
      </div>
      
      <div className="w-[20rem] h-[20rem] bg-blue-900/[0.95] text-blue-100 mx-auto rounded-xl grid
      grid-rows-4 border-[2px] border-blue-300 p-[.5rem]">
        <label className='h-[1rem] mx-auto mt-[1.5rem] font-bold text-[1.7rem]'>Enter Item and Price</label> 
        <form 
          onSubmit={handleItemSubmit}
          ref={cleanRef}
          className="flex flex-col justify-around row-span-3">
          <input 
            type="text" 
            placeholder='Enter Item'
            onChange={handleItemInput}
            className="w-[80%] h-[3rem] mx-auto rounded-xl border-[2px] border-blue-300 italic
            p-[1rem] font-semibold text-blue-900 text-[1.1rem]"/>

          <input 
            type="number" 
            placeholder='Enter amount'
            onChange={handlePriceInput}
            className="w-[80%] h-[3rem] mx-auto rounded-xl border-[2px] border-blue-300 italic
            p-[1rem] font-semibold text-blue-900 text-[1.1rem]"/>

          <button className='w-[8rem] h-[3rem] bg-blue-200 border-[2px] border-blue-300
           text-blue-900 hover:text-blue-950 text-[1.1rem] font-bold rounded-xl mx-auto 
           hover:bg-blue-50'>Submit</button>
        </form>
      </div>

      {renderUsers()}

    </main>
    
  )
}

export default MainPage