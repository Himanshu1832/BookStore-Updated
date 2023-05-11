import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useQuery } from 'react-query'

import Sidebar from "../../FixedComponents/Sidebar/Sidebar";
// import Nav from "../../FixedComponents/Nav";
import "./CartDetails.css";

const getCartData = async () => {
    return await axios.get('http://localhost:8000/api/cart')
  
  }



const CartDetails = () => {
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
  console.log(book.branch + " bookdetails");
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/books/${bookId}`);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };



const [books, setbooks] = useState([]);
const { isLoading, data, isError, error, isFetching, refetch } = useQuery('superheroes',
    getCartData,
    {
      refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus

    })




// const handleClick1 = async (e) => {

//     e.preventDefault();
//     // const imgUrl = await upload();

//     if(!books.find(o => (o.bookid ==book.id&& o.uid == currentUser.id))){
//       var uid = currentUser.id;
//     var bookid= book.id;
//     var title = book.title;
//     var desc = book.desc;
//     var mrp = book.mrp;
//     var price = book.price;
//     var collegeName = book.college_name;
//     var sem = book.sem;
    
//       try {
//       await axios.book(`/carts/cart`, {
//         bookid,
//             uid,
//             title,
//             desc,
//             // cat,
//             // // img: file ? imgUrl : "",
//             // date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
//             mrp,
//             price,
//             collegeName,
//             // course,
//             // branch,
//             sem,
//           });
//       navigate("/mycart");
//     } catch (err) {
//       console.log(err);
//     }
//     }
//     else{
//       alert("Already in Cart")
//     }
//   };


  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/${bookId}`);
      navigate("/mycart");
      alert("Book has removed from cart")
    } catch (err) {
      console.log(err);
    }
  };




  const getText = (html:any) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

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
              
              <div className="text-md desc">
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

              <div className="cart">
              {/* <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 " onClick={handleClick1}>
                Add to cart
              </button> */}
              <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 " onClick={handleDelete}>
                Remove From cart
              </button>
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

export default CartDetails;
