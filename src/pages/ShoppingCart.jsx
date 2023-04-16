import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { useNavigate } from 'react-router-dom'
import CartTotal from '../components/CartTotal'

const ShoppingCart = () => {
  const { infoPizza, setInfoPizza } = useContext(MyContext)
  const{addCart}=useContext(MyContext)


  const total = addCart.reduce((acc, el) => acc + el.price, 0)


 
  return (
    <div className='container'>
      <div>
        <h2 className='mt-5'>Este es tu pedido! Revisalo bien antes de pagar </h2>
        <div className="container mt-5">
          {addCart.map(pizza => pizza.estado && (
            <div className='container d-flex justify-content-around border border-info' key={pizza.id}>
              <div className='card-cart'>
                <h4><span>🍕</span> {pizza.name} </h4>
              </div>
              <div className='card-cart'>
                <h4> ${pizza.price} </h4>
              </div>
            </div>
            
        ))}


        </div>
      </div>
      <CartTotal/>

    </div >
  )
}

export default ShoppingCart
