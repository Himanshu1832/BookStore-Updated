import "./Sidebar.css";
// import * as FaIcons from "react-icons/fa";
import React, { useContext,useEffect,useState } from "react";
import axios from "axios";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import "./Nav.css";



function Sidebar() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  // const { currentUser, logout } = useContext(AuthContext);

  // @ts-ignore
  const currentUser = JSON.parse(localStorage.getItem("bookuser"));
console.log(currentUser.data )

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
//@ts-ignore
      this.classList.toggle("active");
//@ts-ignore
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [length,getLength] = useState(" ");

  const [posts, setPosts] = useState([]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/carts/cart1`);
  //       getLength(res.data
  //         .filter(function (posts:any) {
  //           return posts.uid === currentUser?.id;
  //         }).length)
  //       setPosts(res.data);
  //       // console.log(res.data)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);



  return (
    <>
    
      <div className="sidebar">
      <div id="title">BookStore</div>
        <div className="sidebar-top">
        <span>{currentUser.data.user?.username}</span>
          {currentUser!=null ? (
            <span ><button className="btn-logout ">LOGOUT</button>
            </span>
          ) : (
            <Link className="link" to="/login">
          <button className="btn btn-success">LOGIN</button>
              
            </Link>
          )}
          {/* <div>Logout</div> */}
        </div>

        <div className="sidebar-bottom">
          <Link to="/">
            <div className="dropdown-btn" >
              Available Books
              {/* <i className="fa fa-caret-down"></i> */}
            </div>
            <div className="dropdown-container">Buy Sell</div>
          </Link>

          {/* <Link to="/mybuys">
            <div id="page-link">MyBuy</div>
          </Link> */}

          <Link to="/mysell">
            <div id="page-link">MySell</div>
          </Link>
          <Link to="/mycart">
            <div id="page-link">CART</div>
          </Link>

          {/* <div id="cart">
              <span>10 </span><span>img</span>
            </div> */}
          {/* <Link to="/mybuy">
            <div id="page-link">MyBuy</div>
          </Link> */}
          <div className="create">
          <Link to="/addbook" className=" Link fs">
          <i className="fa-solid fa-circle-plus createBtn">1</i>
        </Link>
        
        </div>
        {/* <Link to="/buyinformation">
          <button className="btn btn-success">SEARCH</button>
        </Link> */}
        </div >

        <Link to="/mycart">
        <div id="cart">
        <div id="cart-btn">
        <i className="fa-solid fa-cart-plus"></i>  
        <span id="no">({length}) </span>
        
        </div>
        </div>
          </Link>
      </div>
    </>
  );
}

export default Sidebar;
