import React, { createContext, Fragment, useContext } from 'react'
import { UseContext,UseContextCart } from '../index';
  const CompoundComponent=createContext();

export default function Cart() {
  const {cartItems,setCartItems}=useContext(UseContextCart);
  Cart.BtnRemove= function ButtonRemove(){
    const element=useContext(CompoundComponent);
  return(            
  <button className='add_cancel_btn' onClick={()=>handleRemove(element.index)}>Remove Item</button>
)
}
Cart.BtnMinus=function ButtonMinus(){
    const element=useContext(CompoundComponent);
  return(              
  <button className='add_cancel_btn' onClick={()=>minushandle(element.index)}><i class="fa-solid fa-circle-minus"></i></button>
)
}
Cart.BtnPlus=function ButtonPlus(){
    const element=useContext(CompoundComponent);
  return(             
    <button className='add_cancel_btn' onClick={()=>plushandle(element.index)}><i class="fa-solid fa-circle-plus"></i></button>
)
}

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
        <CompoundComponent.Provider value={element}>
      <div className='item-cart'>
        <Cart.Img />
        <div className='content-cart'>
          <Cart.Title />
          <Cart.Description />
          <div>
            <Cart.BtnRemove />
            <div>
              <Cart.BtnMinus />
              <Cart.BtnPlus />
              </div>
          </div>
          </div>
      </div>
      </CompoundComponent.Provider>
      )
      })):
      (<p className='no_items'>No items found</p>)}
    </div>
  )


  
}
const CardImage=()=>{
  const element = useContext(CompoundComponent);
  return(<div className='cart-img'><img  src={element.image} /></div>
);
}
Cart.Img=CardImage;
const CardTitle=()=>{
  const element =useContext(CompoundComponent);
  return(<div className='title_count_cart'>
          <h5>{element.title}</h5>
          <p>{element.count}</p>
          </div>)
}
Cart.Title=CardTitle;
Cart.Description=function CardDescription(){
  const element=useContext(CompoundComponent);
  return(
          <p>{element.description}</p>);
}

