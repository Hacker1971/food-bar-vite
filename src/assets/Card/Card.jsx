import React from 'react';

const Card = (props) => {
    console.log(props);
    const {strCategoryThumb,strCategory } = props.cart;
    const deleteCart = props.deleteCart;
    return (
        <div className='flex my-9'>
            <img className='w-24 h-24 rounded' src={strCategoryThumb} alt="" />
            <h3>{strCategory}</h3>
            <button onClick={() => deleteCart(strCategory)} className="btn btn-circle btn-outline ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    );
};

export default Card;