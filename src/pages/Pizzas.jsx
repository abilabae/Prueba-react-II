import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'


const Pizzas = ({pizza}) => {

const {addCart, setAddCart}=useContext(MyContext)
const {infoPizza, setInfoPizza}=useContext(MyContext)



const addPizza= (id)=>{
    const pizzaIndex= infoPizza.findIndex((item)=>item.id===id)
    infoPizza[pizzaIndex].estado =!infoPizza[pizzaIndex].estado
    setAddCart([...addCart,pizza])
    
}

    const navigate=useNavigate()
    const HandleClick=()=>{
        navigate(`pizzas/${pizza.id}`)
    }


    return (
        <>
            <div className="card" style={{ width: "20rem" }}>
                <img src={pizza.img} className="card-img-top mt-2" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-center">{pizza.name}</h4>
                    <hr />
                    <p className="card-text text-center"><span>🍕</span>Ingredientes: {pizza.ingredients.join("- ")}</p>
                    <hr />
                    <h3 className='text-center'>${pizza.price}</h3>
                    <button className='btn btn-primary mt-3 me-5' onClick={HandleClick}>Ver Más</button>
                    <button className='btn btn-danger mt-3 ms-5'onClick={()=> addPizza(pizza.id)}>Añadir</button>
                </div>
            </div>
        </>
    )
}

export default Pizzas
