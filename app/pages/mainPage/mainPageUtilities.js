"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
//LIBRARIES
import Swal from 'sweetalert2'
//COMPONENTS
import ParticipantCard from '../../components/ParticipantCard'

const MainPageUtilities = () => {
    
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

    //CHANGE STYLING OF THE PARTICIPANTS CARDS ON FINISH
    const [finish, setFinish] = useState(false)


    //SAVES THE PRODUCTS DATA IN LOCAL STORAGE SO YOU DON´T LOSE THEM ON REFRESH
    useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    
    useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
        setItems(JSON.parse(storedItems));
    }
    }, []);


    //ALERT USER THAT DATA WILL BE LOST ON REFRESH
    useEffect(() => {
    window.addEventListener('beforeunload', alertRefresh, { capture: true });
    
    return () => {
        window.removeEventListener('beforeunload', alertRefresh);
    };
    }, []);


    //ALERTS IF USER TRIES TO REFRESH
    const alertRefresh = (e) => {
    e.preventDefault();
    e.returnValue = '';
    }
    
    //HANDLES THE CHECKBOXES OF THE PARTICIPANTS
    const handleCheckedUsers = (userId, checked) => {
    checked ?
    setCheckedUser((prevCheckedUsers) => [...prevCheckedUsers, userId]) :
    setCheckedUser((prevCheckedUsers) => prevCheckedUsers.filter( (id) => id !== userId))
    }


    //RENDERS THE USER CARDS
    const renderUsers = () => {
    return Array.from({ length: userAmount }, (_, i) => (
        <ParticipantCard 
        key={i} 
        id={i}
        items={items}
        handleCheckedUsers={handleCheckedUsers}
        finish={finish}
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
    checkedUser.length === 0 ?
    Swal.fire('No users marked') :
    storeItems.price === 0 || storeItems.name === "" ?
    Swal.fire('No product or amount entered!') : 
    (setItems( prevItems => ([...prevItems, storeItems])),
    Swal.fire('Product added!'),
    setAmount(Number((storeItems.price / checkedUser.length).toFixed(2))),
    cleanRef.current.reset(),
    setCheckedUser([]), 
    setStoreItems({
        name: "",
        price: 0
    }))
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
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            }
        })
    }

    //CHANGE STYLING ON FINISH
    const handleFinish = () => {
        setFinish(true)
    }
    
      

  return (

    { 
    renderUsers, 
    handleItemInput, 
    handlePriceInput, 
    handleItemSubmit, 
    eraseItems,
    items, 
    cleanRef, 
    finish,
    handleFinish
    }
  )
}

export default MainPageUtilities