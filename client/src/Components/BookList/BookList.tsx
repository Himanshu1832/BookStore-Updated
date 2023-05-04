import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useQuery } from 'react-query'

// import Pagination from "../Pagination/Pagination";
// import BuyInformation from "../BuyInformation/BuyInformation";

import "./BookList.css";


const getBookData = async () => {
  return await axios.get('http://localhost:8000/api/addbook')

}


function BuyList() {



  //@ts-ignore
  var user = JSON.parse(localStorage.getItem("user"));
  const college = user?.college_name.toLowerCase();
  const uid = user?.id;




  //search

  const [query, setQuery] = useState("");
  console.log(query)
  const keys = ["title", "college_name", "sem"]




  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('superheroes',
    getBookData,
    {
      refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus

    })

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
        {/* <div className="searchdiv">
        <input
        placeholder="Search book"
        type="text"
        className="search"
        onChange={(e)=> setQuery(e.target.value)}
      />
        </div> */}
        <div className="row">

          {data?.data
            // .slice(pagination.start, pagination.end)
            .filter(function (posts: any) {
              return posts.college_name.toLowerCase() == "skit"
                &&
                posts.uid != uid
                &&
                (posts.title.toLowerCase().includes(query.toLowerCase()) || posts.branch.toLowerCase().includes(query));
            })
            // .slice(pagination.start, pagination.end)

            .filter((item: any) => keys.some((key) => item[key].toLowerCase().includes(query)))
            .map((post: any) => (

              <div>
                <Link to={`/buybookdetails/${post.id}`} className="link-styles">
                  <Card key={post.id} post={post} />
                </Link>
              </div>
            ))}
        </div>



        {/* <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={posts.length}
          
        /> */}
      </div>
      {/* <input
        placeholder="Search book"
        type="text"
        className="search"
        onChange={(e)=> setQuery(e.target.value)}
      /> */}
    </div>
  );
}

export default BuyList;
