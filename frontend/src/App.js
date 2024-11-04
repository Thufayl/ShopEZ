import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-[3vw] md:px-[5vw] lg:px-[2vw]'>
    <Navbar />
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
    </div>
  )
}

export default App