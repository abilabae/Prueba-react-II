import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import ShoppingCart from "../pages/ShoppingCart"
import Details from "../pages/Details"

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="cart" element={<ShoppingCart/>}></Route>
        <Route path="pizzas/:id" element={<Details/>}></Route>

      </Routes>
    </div>
  )
}

export default AppRouter
