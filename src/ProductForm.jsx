import { useContext } from "react";
import { ProductObjectContext } from "./ProductSectionController";
export const ProductForm = ()=>{

  const {productObject, setProductObject} = useContext(ProductObjectContext)

  return(<div className="form-container">
    <h1>Update Product</h1>
    <p>Name : 
      <input type="text" value={productObject.name} 
      onChange={
        (e)=>setProductObject(
          p=>({...p, name:e.target.value})
        )
      }/>
    </p>
    <p>Price :
      <input type="number" value={productObject.price.toString()} onFocus={(e) => e.target.select()} onChange={
        (e)=>setProductObject(
          p=>({...p, price:parseFloat(e.target.value)||0})
        )
      }/>
    </p>
    <p>Description :
      <input type="text" value={productObject.description} onChange={
        (e)=>setProductObject(
          p=>({...p, description:e.target.value})
        )
      }/>
    </p>
  </div>);
}
