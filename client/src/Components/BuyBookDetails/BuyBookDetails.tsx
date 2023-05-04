import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import Sidebar from "../../FixedComponents/Sidebar/Sidebar";
import { useAddToCart } from '../../Hooks/CustumHooks/useAddToCart';
import { AddCartValues} from '../../Interface/Interface';

import "./BuyBookDetails.css"
import {user} from "../../Context/authContext";

const BuyBookDetail = () => {
  const [book, setbook] = useState<any>({});

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/addbook/${bookId}`);
        setbook(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [bookId]);
//   console.log(book.branch + " bookdetails");
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/books/${bookId}`);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };



// const [books, setbooks] = useState([]);

// const cat = useLocation().search
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`/carts/cart1`);
//       setbooks(res.data);
//       console.log(res.data)
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();
// }, [cat]);


// const handleClickBuy = async (e) => {
//   e.preventDefault();
//   console.log(book.uid)
//   console.log("Main id")
//   let bookdetails={
    
//     bookid:book.id,
//     uid:book.uid,

//     title:book.title,
//     desc:book.desc,
//     img:book.img,
//     mrp:book.mrp,
//     price:book.price,
//     collegeName:book.college_name,
//     sem:book.sem,
//     edition:book.edition,
//     buyerid:currentUser.id,
//     buyername:currentUser.name,
//     buyeremail:currentUser.email,
//     buyercollege:currentUser.college_name,
//     buyerphone:currentUser.phone,
//       }
//       console.log(bookdetails)
  
// }


// const handleClick1 = async (e:any) => {

//     e.preventDefault();
//     // const imgUrl = await upload();

//     // if(!books.find(o => (o.bookid ==book.id && o.uid == currentUser.id))){
//       var uid = user.id;
//     var bookid= book.id;
    
//       try {
//       await axios.book(`http://localhost:8000/api/cart`, {
//         bookid,
//          uid,
//           }).then(()=>navigate("/cart"));
//     } catch (err) {
//       console.log(err);
//     }
//     // }
//     // else{
//     //   alert("Already in Cart")
//     // }
//   };



const { mutate, isLoading } = useAddToCart();
  
  const handleAddToCart = () => {
    const cartData : AddCartValues= {
      bookId :book.id,
      userId:book.uid,
    };
    console.log(cartData);

    mutate(cartData);
    // navigate("/mysell");
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/addbook/${book.id}`);
      // navigate("/mycart");
      alert("Book has deleted from cart")
    } catch (err) {
      console.log(err);
    }
  };




//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };

  return (
    <div className="dashboard">
      {/* <Nav /> */}

      <div className="belownav">
        <Sidebar />
        <div className="book-details">
          {/* <button className="mb-12 font-bold" onClick={ () => { history.goBack() } }>Back</button> */}
          <button className="back">
            <a href="/">Back</a>
          </button>
          <div className="flex">
            {/* <img src={ product.img } alt="pizza" /> */}
            {/* <img src="https://tinyurl.com/3h9wjwv5" alt="city" id="img"/> */}
            {/* <img src={`../upload/${book?.img}`} alt="Hii" id="img"/> */}


            {/* <div className="info">
              <h1 className="text-xl font-bold">{book.title}</h1>
              <div className="text-md">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(book.desc),
                  }}
                ></p>{" "}
              </div>
              <div className="font-bold mt-2">MRP : ₹ {book.mrp}</div>
              <div className="font-bold mt-2">Price : ₹ {book.price}</div>

              <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
                Add to cart
              </button>
              <div className="ic" onClick={handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                  <Link to={`/addbooks?edit=2`} state={book}>
                  <div className="ic">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
              </Link>
                  <span>{book.username}</span>
            <p>booked {moment(book.date).fromNow()}</p>
            </div> */}

<div className="info">
              <h1 className="text-xl font-bold title">{book.title}</h1>
              
              <div className="">
                <div>
                {/* <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(book.desc),
                  }}
                ></p>{" "} */}
                </div>
              </div>
              <div className="font-bold mt-2 mrp">MRP : ₹ {book.mrp}</div>
              <div className="font-bold mt-2 price">Price : ₹ {book.price}</div>
              <div className="font-bold mt-2 price">Edition :  {book.edition}</div>




              <div className="cart">
              <button className="addCartButton " >
                BUY
              </button>
              <button className="addCartButton " onClick={handleAddToCart}>
                Add to cart
              </button>
              
              {/* <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 " onClick={handleDelete}>
                Delete cart
              </button> */}
              </div>
              <div id="icons">
              {/* <div className="ic" onClick={handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                  </div> */}
                  {/* <Link to={`/addbooks?edit=2`} state={book}>
                  <div className="ic">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
              </Link> */}
              </div>
                  
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BuyBookDetail;
