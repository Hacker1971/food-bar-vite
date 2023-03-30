import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Food from '../Food/Food';
import { addToDb, getCartInLocalStorage, remove } from '../Utilits/Utilits';

const Foods = () => {
    const [foods,setFoods] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setFoods(data.categories))
    },[])  ;
    const addedToCart = (food) =>{
        const getcard = carts.find(card => card.idCategory === food.idCategory)
        if(getcard){
           return alert('find')
        }
        const newCart = [...carts, food];
        setCart(newCart); 
        addToDb(food.strCategory)  
    };
    const deleteCart = (name) => {
        remove(name)
        // location.reload()
        const getCart = carts.filter(cart => cart.strCategory !== name);
        setCart(getCart)
    };
    useEffect(() => {
        const getCarts = getCartInLocalStorage();
        let storProduct = [];
        //step 1: get id
        for (const name in getCarts) {
            //step 2: get the cart by using id
            const product = foods.find(food => food.strCategory === name);
            if (product) {
                storProduct.push(product)
            }
        }
        setCart(storProduct)
    }, [foods]);
    return (
        <div className='flex justify-between mx-auto'>
            <div className='grid  grid-cols-1 md:grid-cols-3 gap-5 mx-8 my-9'>
                {
                    foods.map(food =><Food 
                        food= {food}
                        key={food.idCategory}
                        addedToCart={addedToCart}
                    ></Food> )
                }
                
            </div>
            <div >
            <h3 className='text-center'>Cart summary</h3>
            <p>Total order: {carts.length}</p>
            {
                carts.map(cart => <Card
                    key={cart.idCategory}
                     cart = {cart}
                     deleteCart={deleteCart}
                ></Card>)
            }
            
            </div>
        </div>
    );
};

export default Foods;