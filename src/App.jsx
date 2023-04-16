import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import { MyContext } from './context/MyContext'
import { pizzas } from './data/getInfoPizza'

function App() {
  const [infoPizza, setInfoPizza] = useState(pizzas)
  const[addCart, setAddCart]=useState([])


  return (
    <div>
      <MyContext.Provider value={{infoPizza, setInfoPizza, addCart, setAddCart}}>
        <Navbar />
        <AppRouter />
      </MyContext.Provider>

    </div>
  )
}

export default App
