import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const btnItems = useNavigate();
    const btnCart =useNavigate();
  return (
    <Fragment>
        <ul className='nav_links'>
            <li><button onClick={()=>{btnItems("/")}}>Items</button></li>
            <li><button onClick={()=>{btnCart("/cart")}}><i class="fa-solid fa-cart-shopping"></i></button></li>
        </ul>
    </Fragment>
  )
}
