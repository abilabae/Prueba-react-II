import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { pizzas } from "../data/getInfoPizza"
import { useParams } from 'react-router-dom'
import Pizzas from './Pizzas'


const Details = () => {

  const { infoPizza } = useContext(MyContext)
  const {addCart, setAddCart}=useContext(MyContext)



  const addPizza= (id)=>{
    const pizzaIndex= infoPizza.findIndex((item)=>item.id===id)
    infoPizza[pizzaIndex].estado =!infoPizza[pizzaIndex].estado
    setAddCart([...addCart, infoPizza[pizzaDetail]])
    
}
   


  const { id } = useParams();
  const pizzaDetail = infoPizza.findIndex(item => item.id == id)

      

  return (
    <div className='container d-flex justify-content-center'>
      <div className='container row d-flex justify-content gap-3 mt-5'>
        <div style={{ width: "500px"}}>
          <img src={infoPizza[pizzaDetail].img} className="card-img-top" alt="..." />
        </div>
        <div className="card-detail row" style={{ width: "500px" }}>
          <h3>{infoPizza[pizzaDetail].name}</h3>
          <hr />
          <p>{infoPizza[pizzaDetail].desc}</p>
          <p><strong>Ingredientes:</strong></p>
          <p><span>🍕</span>{infoPizza[pizzaDetail].ingredients.join("- ")}</p>
          <h2>Precio: $ {infoPizza[pizzaDetail].price}</h2>
          <button className='btn btn-danger mt-3 ms-5' onClick={()=> addPizza(infoPizza[pizzaDetail].id)}><span>🛒</span>Añadir</button>
        </div>

      </div>

    </div>
  )
}

export default Details
