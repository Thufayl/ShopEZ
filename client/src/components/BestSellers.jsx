import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "./Title"

const BestSellers = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])

  return (
    <div className='my-10'>
        <div className = "text-center text-3xl py-8" ></div>
        <Title text1 = {"BEST"} text2 = {"SELLERS"}/>
    </div>
  )
}

export default BestSellers