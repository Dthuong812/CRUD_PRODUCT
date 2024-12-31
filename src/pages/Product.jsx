import React, {useEffect, useState} from 'react'
import ProductForm from '../components/product/ProductForm'
import ProductData from '../components/product/ProductData'
import SearchProduct from '../components/product/SearchProduct'


const Product = () => {
    const dataProduct = JSON.parse(localStorage.getItem("productData"))
    const [productData, setProductData] = useState(dataProduct)
    const [filteredData, setFilteredData] = useState(productData);
    useEffect(() => {
        localStorage.setItem("productData", JSON.stringify(productData));
        setFilteredData(productData);
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
    const handleUpdateProduct = (updatedProduct) => {
      setProductData((prevData) =>
          prevData.map((product) =>
              product.id === updatedProduct.id ? updatedProduct : product
          )
      );
  };
  const handleSearch = (keyword) => {
    if (keyword.trim() === "") {
        setFilteredData(productData); 
    } else {
        const filtered = productData.filter((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredData(filtered);
    }
};
    return (
        <div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" }}>
            <SearchProduct onSearch={handleSearch}></SearchProduct>
            <ProductForm addProduct={addProduct}></ProductForm>
            </div>
            <ProductData productData={filteredData} deleteProduct= {deleteProduct} handleUpdateProduct={handleUpdateProduct}></ProductData>
        </div>
    )
}

export default Product
