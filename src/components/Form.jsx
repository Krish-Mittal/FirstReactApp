import { useState } from "react";
import { addProduct } from "../api/ProductApi";

export const Form = ({handleAddData}) => {

  
  const[addData, setAddData] = useState({
    prodId : 0,
    prodName : "",
    price : 0
  });

  return(
    <section className="form-container">
      <p>Id : 
        <input 
          type="number" 
          autoComplete="off"
          onFocus={(e) => e.target.select()}
          value={(addData.prodId).toString()}
          onChange={ (e) => {
            setAddData(d => (
              {
                ...d,
                prodId:(parseInt(e.target.value)||0)
              }
            ));
          }}
        />
      </p>

      <p>Name : 
        <input 
          type="text"
          autoComplete="off"
          value={addData.prodName}
          onChange={ (e) => {
            setAddData( d => ({...d,prodName:e.target.value}));
          }}
        />
      </p>

      <p>Price : 
        <input 
          type="number" 
          autoComplete="off"
          onFocus={(e) => e.target.select()}
          value={addData.price}
          onChange={ (e) => {
            setAddData(d => (
              {
                ...d,
                price:(parseInt(e.target.value)||0)
              }
            ));
          }}
        />
      </p>

      <p>
        <button 
          className="button"
          onClick={()=>handleAddData(addData)}
        >
          Submit
        </button>
      </p>

    </section>
  );
}
