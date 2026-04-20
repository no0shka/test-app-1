import React, { createContext, Fragment ,useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { UseContext,UseContextCart } from '../index';
import {handleRemove}from './Cart.js';

export default function Items() {
    const {cartItems,setCartItems}=useContext(UseContextCart)
    const toAdd=useNavigate();
    const { inputValue ,setInputValue} = useContext(UseContext);
    const handleEval=(rev)=>{
        switch (rev){
            case '5':
                return(
                    <Fragment><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></Fragment>
                )
            case '4':
                return(<Fragment><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></Fragment>)
                
            case '3':
                return(
                    <Fragment>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                    </Fragment>
                )
            case '2':
                return(
                    <Fragment>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                    </Fragment>
                )
            case '1':
                return(
                    <Fragment><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                    </Fragment>
                )
            default:
                return(
                    <Fragment><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                    </Fragment>
                )
            }
            }

            
            const handleDelete = (indexToDelete) => {
        setCartItems((previtem)=>{
    return previtem.filter((_, i) => i !== indexToDelete);})
    
    setInputValue((prevItems) => {
        return prevItems.filter((_, index) => index !== indexToDelete);
    });
};
const handleToCart=(props)=>{
    setCartItems((prevcartitems)=>{
        const isExist=prevcartitems.find((item)=> item.index === props.index);
        if(isExist){
            return prevcartitems.map((item) =>
                item.index === props.index
                ? { ...item, count: (item.count || 1) + 1 } 
                : item
            );
        }
        
    return [...prevcartitems, { ...props, count: 1 }];
    }
    )
}
const Item=(props)=>{
    return(<div className='item_list'>
    <div className='div_img'><img src={props.image}/></div>
    <h5>{props.title}</h5>
    <div className='handleDes'>
    <p>{props.description}</p>
    <button onClick={()=>handleToCart(props)}><i class="fa-solid fa-cart-plus"></i></button></div>
    <div className='handleRev'>
    <p>{handleEval(props.review)}</p>
    <button onClick={()=>handleDelete(props.index)}><i class="fa-solid fa-trash-can"></i></button>
    </div>
</div>)
}

return (
    <Fragment>
        <button onClick={()=>toAdd("/additems")} className='add_cancel_btn'>Add Item</button>
        <div className="items_list">
                {inputValue && inputValue.length > 0 ? (
                    inputValue.map((element, index) => (
                        <Item 
                            key={index}
                            index={index}
                            image={element.image}
                            title={element.title}
                            description={element.description}
                            review={element.review}
                        />
                    ))
                ) : (
                    <p className='no_items'>No items found. Click "Add Item" to start!</p>
                )}
            </div>
    </Fragment>
)
}