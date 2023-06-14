import "./Sidebar.css";
// import * as FaIcons from "react-icons/fa";
import React, { useContext,useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RegisterFormValues } from "../../Interface/Interface";
import { user } from "../../Context/authContext";
import { set } from "lodash";


function Sidebar() {
  // var dropdown = document.getElementsByClassName("dropdown-btn");
  // var i;
  // const { currentUser, logout } = useContext(AuthContext);
  //@ts-ignore
  const [currentUser, setCurrentUser] = useState<RegisterFormValues | null>(JSON.parse(localStorage.getItem("user")) || null);

  useEffect(
   ()=>{
    
   },[]
  );

  const [reload,setReload]=useState(false)
//  //@ts-ignore
//   let currentUser= JSON.parse(localStorage.getItem("user"))


  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setReload(!reload)
    setCurrentUser(null)
    
  };

  const login = () => {

    setReload(!reload)
    
    
  };

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [length,getLength] = useState("10");

  const [posts, setPosts] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/cart`);
        getLength(res.data
          .filter(function (posts:any) {
            return posts.userId == user?.id;
          }).length)
        setPosts(res.data);
        // console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <>
    
      <div className="sidebar">
      <div id="title">BookStore</div>
        <div className="sidebar-top">
        <span>{currentUser?.username}</span>
         
          {currentUser!=null ? (
            <span onClick={logout}>
            <button className="btn-logout ">LOGOUT</button>
          </span>
          ) : (
            <Link className="link" to="/login" onClick={login}>
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

          <Link to="/mysell">
            <div id="page-link">MySell</div>
          </Link>
          <Link to="/mycart">
            <div id="page-link">CART</div>
          </Link>
          <div className="create">
          <Link to="/addbook" className=" Link fs">
          <i className="fa-solid fa-circle-plus createBtn">1</i>
        </Link>
        
        </div>
        </div >

        <Link to="/mycart">
        <div id="cart">
        <div id="cart-btn">
        <i className="fa-solid fa-cart-plus"></i>  
        <span id="no">({length}) q</span>
        
        </div>
        </div>
          </Link>
      </div>
    </>
  );
}

export default Sidebar;
