import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../FixedComponents/Sidebar/Sidebar";
import { useAddToCart } from '../../Hooks/CustumHooks/useAddToCart';
import { AddCartValues } from '../../Interface/Interface';
import { useGetSingleBookFromCart } from "../../Hooks/CustumHooks/GetHooks/useGetSingleBookFromCart";

import "./SellBookDetail.css"
import { user } from "../../Context/authContext";
import { useGetSingleBookData } from "../../Hooks/CustumHooks/GetHooks/useGetSingleBookData";

const SellBookDetail = () => {
//   const [book, setbook] = useState<any>({});

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = Number(location.pathname.split("/")[2]);

  const { isLoading, data, isError, error, isFetching, refetch } = useGetSingleBookData(bookId);
  console.log(data)


  const { mutate } = useAddToCart();

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  const handleDelete = async () => {
    try {
      
      await axios.delete(`http://localhost:8000/api/addbook/${bookId}`);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
    try {
      await axios.delete(`http://localhost:8000/api/cart/${bookId}`);
      // navigate("/mysell");
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
            <img src={`../uploads/${data?.data.img}`} alt="Hii" id="img" />




            <div className="info">
              <h1 className="text-xl font-bold title">{data?.data.title}</h1>

              <div className="font-bold mt-2 desc">
                {/* <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(book.desc),
                  }}
                ></p>{" "} */}
                <p>{data?.data.desc}</p>
              </div>
              <div className="font-bold mt-2 mrp">MRP : ₹ {data?.data.mrp}</div>
              <div className="font-bold mt-2 price">Price : ₹ {data?.data.price}</div>
              <div className="font-bold mt-2 price">Edition :  {data?.data.edition}</div>




              <div className="cart">
                <button className="addCartButton " onClick={handleDelete}>
                  Delete
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

export default SellBookDetail;
