import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'


const CartTotal = () => {
    const{addCart}=useContext(MyContext)

const total=addCart.reduce((acc,el)=>acc+el.price, 0)

  return (
    <div className='container mt-3 text-center alert alert-primary'>
        <h2>Total a pagar:$ {total}</h2>
    </div>
  )
}

export default CartTotal
