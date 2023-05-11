import React from 'react'
import Sidebar from '../../FixedComponents/Sidebar/Sidebar'
// import Nav from '../../FixedComponents/Nav';
import MyCart from '../../Components/MyCart/MyCart'
import "./Cart.css"

const Cart = () => {
  return (
    <div className='dashboard'>
        {/* <Nav /> */}
        
        <div className='belownav'>
            <Sidebar />
            <MyCart/>
      
        </div>
    </div>
  )
}

export default Cart