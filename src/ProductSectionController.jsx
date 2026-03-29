import { useState, createContext, useEffect } from "react";
import { List } from "./List";
import { ProductForm } from "./ProductForm";

export const ProductsDataContext = createContext();

export const ProductObjectContext = createContext();

export const ProductSectionController = ()=>{

  const [productObject, setProductObject] = useState(
    {prodName : "Name", price : 0, description:"Description"}
  )

  const apiUrl = 'http://localhost:8080/product'
  let data = []
  async function fetchProductData(){
    try{
      const response = await fetch(apiUrl)
      if(!response.ok){
        throw new Error(response.status)
      }
      data = await response.json()
      setProductsList(data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchProductData()
  },[])

  const [productsList, setProductsList] = useState([]);

  function addItem(){
    setProductsList(p => [...p, {productObject}])
  }
  
  function removeItem(){
    setProductsList(p=>p.filter((_,i) => i !== p.length-1))
  }
  
  return(
    <div>
      {/* {console.log(productsList)} */}
      <ProductsDataContext.Provider value = {{productsList,setProductsList}}>
        <List/>
      </ProductsDataContext.Provider>

      <ProductObjectContext.Provider value = {{productObject,setProductObject}}>
        <ProductForm/>
      </ProductObjectContext.Provider>

      <button className="button" onClick={addItem}>AddProduct</button>
      <button className="button" onClick={removeItem}>RemoveProduct</button>
      
    </div>
  );
}
