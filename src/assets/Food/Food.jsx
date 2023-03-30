import React from 'react';

const Food = (props) => {
   
    const {strCategoryThumb,strCategory,strCategoryDescription} = props.food;
    const addedToCart = props.addedToCart
    return (
        <div >
          <div className="card w-72 h-96 bg-base-100 shadow-xl">
            <figure><img src={strCategoryThumb}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p>{strCategoryDescription.slice(1, 100)}</p>
                <div className="card-actions text-left">
                <button onClick={()=>addedToCart(props.food)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>  
        </div>
    );
};

export default Food;