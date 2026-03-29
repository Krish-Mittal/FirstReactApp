import { useEffect, useContext } from "react"
import { ProductsDataContext } from "./ProductSectionController"
import { ProductCard } from "./ProductCard"

export const List = ()=>{

  const {productsList,setProductsList} = useContext(ProductsDataContext)

  useEffect(
    ()=>{document.title = `${productsList.length} Products`}
  )


  return(
    <div className="product-list">
        {
          productsList.map(
            (p, index) => <ProductCard {...p} key={index}/>
          )
        }
      </div>
    
    
  )
}
