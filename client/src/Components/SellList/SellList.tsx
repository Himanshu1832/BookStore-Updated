import "./SellList.css";
import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useQuery } from 'react-query'


const getBookData = async () => {
    return await axios.get('http://localhost:8000/api/addbook')
    
  }
const SellList = () => {

    //@ts-ignore
  var user = JSON.parse(localStorage.getItem("user"));
  const college = user?.college_name.toLowerCase();
//@ts-ignore
  var user = JSON.parse( localStorage.getItem('user' ) );
  const uid = user?.id;

  console.log("uid")
  console.log(uid)

  const {isLoading , data , isError , error , isFetching , refetch} = useQuery('superheroes',
 
       getBookData,
       {
          refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus

       })

       
console.log(data?.data)
  
  return (
    <div className="buylist">
      <div className="container py-3">
        <div className="row md:4">
          {
          data?.data
          .filter(function (books:any) {
            return books.uid === uid;
          })
          .map((book:any) => (
            // <div className="md-4">
            <Link to={`/sellbookdetail/${book.id}`} className="link-styles">
                <Card key={book.id} book={book} />
              </Link>

            // </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default SellList