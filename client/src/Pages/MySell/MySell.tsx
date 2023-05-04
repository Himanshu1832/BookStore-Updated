import React from 'react'
import Sidebar from '../../FixedComponents/Sidebar/Sidebar';
import SellList from '../../Components/SellList/SellList';
import "./MySell.css"

const MySell = () => {
  return (
    <div className='dashboard'>
        {/* <Nav /> */}
        
        <div className='belownav'>
            <Sidebar />
            <SellList/>
      
        </div>
    </div>
  )
}

export default MySell