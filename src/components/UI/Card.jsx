
export const Card = ({data,handleDeleteProduct}) => {

  const {prodId : id, prodName : name, price} = data;

  return(
    <div className="card">
      <div className="card-img"><div className="img"></div></div>
      
      {/* ID AND NAME */}
      <div className="card-title">ID : {id}</div>
      <div className="card-subtitle">Name : {name}</div>
      <hr className="card-divider"></hr>
      <div className="card-footer">

        {/* PRICE */}
        <div className="card-price">Price : <span>$</span>{price}</div>
        <button 
          className="card-btn" 
          onClick={()=>handleDeleteProduct(id)}
        >
          <h3 className="white">Delete</h3>
          <svg viewBox="0 0 512 512"></svg>
        </button>
      </div>
    </div>
  );
}
