import React, {useEffect, useState} from 'react'
import ProductForm from '../components/product/ProductForm'
import ProductData from '../components/product/ProductData'


const Product = () => {
    const dataProduct = JSON.parse(localStorage.getItem("productData"))
    const [productData, setProductData] = useState(dataProduct)
    useEffect(() => {
        localStorage.setItem("productData", JSON.stringify(productData));
    }, [productData]);
    const addProduct = (newProduct) => {
        const product = {
            id: randomIntFromInterval(1, 333333),
            name: newProduct.name,
            price: newProduct.price
        }
        console.log(product)
        setProductData((prevData) => [
            ...prevData,
            product
        ]);
    }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const deleteProduct =(id)=>{
      const newProduct = productData.filter(item =>item.id !== id)
      setProductData(newProduct)
    }
    return (
        <div>
            <ProductForm addProduct={addProduct}></ProductForm>
            <ProductData productData={productData} deleteProduct= {deleteProduct}></ProductData>
        </div>
    )
}

export default Product
