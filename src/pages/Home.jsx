import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Pizzas from './Pizzas'

const Home = () => {
  const { infoPizza, setInfoPizza } = useContext(MyContext)

  return (
    <div>
      <div className="picpizza">
        <h1 className='text-header'>Pizzas Mamma Mia</h1>
        <img src="https://img.freepik.com/foto-gratis/vista-superior-pizza-queso-aceitunas-pimiento-tomates-superficie-oscura_179666-34872.jpg?w=740&t=st=1681433359~exp=1681433959~hmac=19fa01b24ab49e5c5c4cafcb824231534a7b8c9a6741f5f5a2b249878addb2c7" alt="pizza" />
      </div>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center gap-5'>
          {infoPizza.map((pizza) => <Pizzas key={pizza.id} pizza={pizza} />)}
        </div>

      </div>
    </div>
  )
}

export default Home
