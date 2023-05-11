import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { map } from 'lodash';
import { AddBookFormValues } from "../../Interface/Interface";
import "./BookList.css";
import { useBooksData } from "../../Hooks/CustumHooks/GetHooks/useGetAllBooks";
import { user } from "../../Context/authContext";


function BuyList() {

  const uid = user?.id;


  //search

  const [query, setQuery] = useState("");
  console.log(query)
  const keys = ["title", "college_name", "sem"]
  const { isLoading, data, isError, error, isFetching, refetch } = useBooksData();
  console.log(data?.data)


  return (
    <div className="buylist">
      <input
        placeholder="Search book"
        type="text"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="container py-3">
        <div className="row">

          {data?.data
            .filter(function (books: AddBookFormValues ) {
              return books.college_name?.toLowerCase() == "skit"
                &&
                books.uid != uid
                &&
                (books.title.toLowerCase().includes(query?.toLowerCase()) || books.branch?.toLowerCase().includes(query));
            })

            .filter((item: any) => keys.some((key) => item[key]?.toLowerCase().includes(query)))
            .map((book: AddBookFormValues ) => (

              <div>
                <Link to={`/buybookdetails/${book.id}`} className="link-styles">
                  <Card key={book.id} book={book} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BuyList;
