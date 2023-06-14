import "./MyCart.css";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useQuery } from 'react-query'
import {user} from "../../Context/authContext"
import { useGetBooksFromCart } from "../../Hooks/CustumHooks/GetHooks/useGetBooksFromCart";
import { map } from "lodash";

const MyCart = () => {
  
    const { isLoading, data, isError, error, isFetching, refetch } = useGetBooksFromCart()

//   console.log(data?.data[0].book.id)

// //@ts-ignore
// const user = JSON.parse(localStorage.getItem('user'));

//@ts-ignore
const token = localStorage.getItem('token')||null;
  
  
  return (
    <div className="buylist">
      <div className="container py-3">
        <div className="row md:4">
          {
          data?.data
          .filter(function (books:any) {
            return books?.userId == user?.id;
          })
          .map((book:any) => (
            // <div className="md-4">
            <Link to={`/cartdetails/${book?.bookId}`} className="link-styles">
                <Card key={book?.bookId} book={book?.book} />
              </Link>

            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default MyCart