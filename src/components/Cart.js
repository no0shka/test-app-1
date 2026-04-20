import React, { Fragment, useContext } from 'react'
import { UseContext,UseContextCart } from '../index';

export default function Cart() {
  const {cartItems,setCartItems}=useContext(UseContextCart);

function handleRemove(index){
    return setCartItems((previtems)=>{
      return previtems.filter((_, i) => i !== index);
    })
  }


  function minushandle(index){
    if (cartItems[index].count <= 1) {
    return handleRemove(index); 
  }
    return setCartItems((previtems)=>{
      return(
previtems.map((item,i)=>{
  return(
i===index? {...item,count:item.count-1} : item)
}))
    })
  }

function plushandle(index){
    return setCartItems((previtems)=>{
      return(
previtems.map((item,i)=>{
  return(
i===index? {...item,count:item.count+1} : item)
}))
    })
  }

  return (
    <div className='cart_items'>
      
      {cartItems && cartItems.length > 0 ? (
      cartItems.map((element,index)=>{
      return(
      <div className='item-cart'>
        <div className='cart-img'><img  src={element.image} /></div>
        <div className='content-cart'>
          <div className='title_count_cart'>
          <h5>{element.title}</h5>
          <p>{element.count}</p>
         </div>
          <p>{element.description}</p>
          <div>
            <button className='add_cancel_btn' onClick={()=>handleRemove(element.index)}>Remove Item</button>
            <div>
              <button className='add_cancel_btn' onClick={()=>minushandle(element.index)}><i class="fa-solid fa-circle-minus"></i></button>
              <button className='add_cancel_btn' onClick={()=>plushandle(element.index)}><i class="fa-solid fa-circle-plus"></i></button></div>
          </div>
           </div>
      </div>)
      
      })):
      (<p className='no_items'>No items found</p>)}
    </div>
  )
}
