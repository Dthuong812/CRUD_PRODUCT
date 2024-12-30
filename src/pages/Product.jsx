import React, { useState } from 'react'
import ProductForm from '../components/product/ProductForm'


const Product = () => {
  const [productData,setProductData]= useState([])
  const addProduct = (newProduct)=>{
    const product= {
      id: randomIntFromInterval(1,333333),
      name:newProduct.name,
      price:newProduct.price
    }
    console.log(product)
    setProductData((prevData) => [...prevData, product]);
  }
  const randomIntFromInterval =(min,max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  return (
    <div>
        <ProductForm addProduct= {addProduct}></ProductForm>

    </div>
  )
}

export default Product