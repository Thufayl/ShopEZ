import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from '.pages/Collection'
import Cart from '.pages/Cart'
import Contact from '.pages/Contact'
import About from '.pages/About'
import Login from '.pages/Login'
import Orders from '.pages/Orders'
import PlaceOrder from '.pages/PlaceOrder'
import Product from '.pages/Product'

const App = () => {
  return (
    <div>App</div>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/collection' element = {<Collection/>} />
      <Route path = '/about' element = {<About/>} />
      <Route path = '/contact' element = {<Contact/>} />
      <Route path = '/product/:productId' element = {<Product/>} />
      <Route path = '/cart' element = {<Cart/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/place-order' element = {<PlaceOrder/>} />
      <Route path = '/orders' element = {<Orders/>} />
    </Routes>
  )
}

export default App