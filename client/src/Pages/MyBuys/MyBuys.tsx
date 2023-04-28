import React from 'react'
import Sidebar from '../../FixedComponents/Sidebar/Sidebar';
// import Nav from '../../FixedComponents/Nav';
import BuyList from '../../Components/BuyList/BuyList';


const MyBuys = () => {
  return (
    <div className='dashboard'>
      {/* <div className='nav'>
        <Nav />
        </div> */}
        
        <div className='belownav'>
            <Sidebar />
            <BuyList/>
      
        </div>
    </div>
  )
}

export default MyBuys