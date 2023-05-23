"use client"
import React from 'react'
//LIBRARIES
import { Popover, Transition } from '@headlessui/react'
import  MainPageUtilities  from './mainPageUtilities'

const MainPage = () => {

  const { 
    renderUsers, 
    handleItemInput, 
    handlePriceInput, 
    handleItemSubmit, 
    eraseItems,
    items, 
    cleanRef
    } = MainPageUtilities();

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