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
    finish,
    handleFinish
    } = MainPageUtilities();

  return (
    
    <main className="bg-[url('/img/bg.jpg')] bg-center bg-contain p-[.6rem] h-[100%]">
      {/* POPOVER FOR THE PRODUCTS LIST */}
      <div className='flex flex-col items-center mb-[3rem]'>
        <Popover className="mb-[1rem] bg-blue-900/[.95] h-[2.5rem] w-[9rem] rounded-xl text-blue-100 
        text-center grid place-items-center border-[1px] border-blue-300 font-bold p-[0.5rem] sm:h-[3.5rem] w-[11rem]
        sm:text-[1.3rem] md:h-[4rem] md:w-[12rem] md:text-[1.4rem]">
          <Popover.Button>View products</Popover.Button>

          <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0">
          
            <Popover.Panel className="absolute transform translate-x-[-50%] top-[4rem] z-10 
            w-[20rem] min-h-[20rem] bg-blue-100 border-[4px] border-blue-300 p-[.5rem] rounded-xl text-blue-900
            sm:w-[30rem] sm:text-[1.4rem] md:w-[40rem] md:text-[1.6rem] xl:w-[50rem]">
                {items.map( (products,i) => {
                  return (
                  <div key={i}
                    className="mb-[.5rem]">
                    <p>Product: {products.name}</p>
                    <p>Price: ${products.price}</p>
                    <hr className='bg-blue-900 text-blue-900 h-[3px] w-[90%] mx-auto'/>
                  </div>)
                })}
            </Popover.Panel>
          </Transition>
        </Popover>

        
        <div className='w-[100%] flex justify-between'>
          {/* BUTTON TO ERASE ALL PRODUCTS */}
          <button 
            onClick={eraseItems}
            className={`${finish ? "hidden" : "block"} mb-[.3rem] bg-blue-900/[.95] h-[2.5rem] w-[9rem] rounded-xl text-blue-100 
          text-center grid place-items-center border-[1px] border-blue-300 font-bold p-[0.5rem] sm:h-[3.5rem] w-[11rem]
          sm:text-[1.3rem] md:h-[4rem] md:w-[12rem] md:text-[1.4rem] md:ms-[1rem] xl:ms-[4rem]`}>
            Erase Products
          </button>

          <button
            onClick={handleFinish}
            className={`${finish ? "hidden" : "block"} bg-blue-900/[.95] h-[2.5rem] w-[9rem] rounded-xl text-blue-100 
            text-center grid place-items-center border-[1px] border-blue-300 font-bold p-[0.5rem] sm:h-[3.5rem] w-[11rem]
            sm:text-[1.3rem] md:h-[4rem] md:w-[12rem] md:text-[1.4rem] md:me-[1rem] xl:me-[4rem]`}>Finish</button>
        </div>
      </div>
      
      <h1 className={`${finish ? "block" : "hidden opacity-0"} text-[3rem] font-bold text-blue-100 text-center 
      bg-blue-900 rounded-xl border-[2px] border-blue-300 sm:w-[30rem] mx-auto`}>Final checks</h1>          

      <h6 className={`${finish ? "block" : "hidden"} text-blue-100 text-center bg-blue-900 rounded-xl border-[2px]
       border-blue-300 mt-[.5rem] sm:w-[30rem] mx-auto sm:text-[1.1rem] 2xl:mb-[6rem]`}>Refresh or go back to start again</h6>

      <div className={`w-[20rem] h-[20rem] transition-opacity opacity-100 ${!finish ? "block" : "hidden opacity-0"} bg-blue-900/[0.95] text-blue-100 mx-auto rounded-xl grid
      grid-rows-4 border-[2px] border-blue-300 p-[.5rem] sm:w-[30rem] md:w-[40rem] xl:mb-[3rem]`}>
        <label className='h-[1rem] mx-auto mt-[1.5rem] font-bold text-[1.7rem]
        md:text-[2rem]'>Enter Item and Price</label> 
        <form 
          onSubmit={handleItemSubmit}
          ref={cleanRef}
          className="flex flex-col justify-around row-span-3">
          <input 
            type="text" 
            placeholder='Enter Item'
            onChange={handleItemInput}
            className="bg-white w-[80%] h-[3rem] mx-auto rounded-xl border-[2px] border-blue-300 italic
            p-[1rem] font-semibold text-blue-900 text-[1.1rem] focus:border-blue-700 outline-none focus:outline-none"/>

          <input 
            type="number" 
            placeholder='Enter amount'
            onChange={handlePriceInput}
            className="bg-white w-[80%] h-[3rem] mx-auto rounded-xl border-[2px] border-blue-300 italic
            p-[1rem] font-semibold text-blue-900 text-[1.1rem] focus:border-blue-700 outline-none focus:outline-none"/>

          <button className='w-[8rem] h-[3rem] bg-blue-200 border-[2px] border-blue-300
           text-blue-900 hover:text-blue-950 text-[1.1rem] font-bold rounded-xl mx-auto 
           hover:bg-blue-50 md:w-[9rem] md:h-[3.2rem] md:text-[1.2rem]'>Submit</button>
        </form>
      </div>

      <div className='mt-[1rem] flex flex-wrap'>
        {renderUsers()}
      </div>
    </main>
    
  )
}

export default MainPage