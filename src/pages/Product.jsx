import { getProducts, deleteProduct, addProduct, updateProduct } from "../api/ProductApi";
import { Form } from "../components/Form";
import { Card } from "../components/UI/Card";
import { useEffect, useState } from "react";

export const Product = ()=>{

  const[data,setData] = useState([]);

  const getDataFromApi = ( async () => {
    try{
      const res = await getProducts();
      setData(res.data);
    }
    catch(error){
      console.log(error);
    }
  });

  const handleAddData = (async (addData)=>{
    const exists = data.findIndex(i => i.prodId === addData.prodId);
    if(exists != -1){
      try{
        const res = await updateProduct(addData);
        if(res.status === 200){
          setData( d => {
            const updatedList = [...d];
            updatedList[exists] = {...addData};
            return updatedList;
          });
        }
      }
      catch(error){
        console.log(error);
      }

    }
    else{
      try{
        const res = await addProduct(addData);
        if(res.status === 200){
          setData(([...data,res.data]));
        } 
      }
      catch(error){
        console.log(error);
      }
    }
  });
  
  const handleDeleteProduct = (async (id) =>{
    try{
      const res = await deleteProduct(id);
      if(res.status === 200){
        setData( d => d.filter(i => i.prodId !== id));
      }
    }
    catch(error){
      console.log(error);
    }
    
  })

  useEffect(()=>{
    getDataFromApi();
  }, [])

  return(
    <><section>
    {
      data.map((currElement)=> 
      <Card 
        key={currElement.prodId} 
        data={currElement} 
        handleDeleteProduct={handleDeleteProduct}/>
    )}

    <Form handleAddData={handleAddData} />
    </section></>
  );
}
