import React, { useState } from "react";
import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../Card/Card";
import { useQuery } from 'react-query'

// import Pagination from "../Pagination/Pagination";
// import BuyInformation from "../BuyInformation/BuyInformation";

import "./BuyList.css";


const getBookData = async () => {
  return await axios.get('http://localhost:8000/api/addbook')
  
}


function BuyList() {

  const [posts, setPosts] = useState([]);

  
//@ts-ignore
  var user = JSON.parse(localStorage.getItem("user"));
  const college = user?.college_name.toLowerCase();
//@ts-ignore
  var user = JSON.parse( localStorage.getItem('user' ) );
  const uid = user?.id;
  // console.log(college + " college")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/posts`);
  //       console.log(res.data);

  //       setPosts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // const [showPerPage, setShowPerPage] = useState(100);
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: 6,
  // });

  // const onPaginationChange = (start, end) => {
  //   setPagination({ start: start, end: end });
  // };

  
  //search

  const [query,setQuery] = useState("");
  console.log(query)
  const keys=["title","college_name","sem"]


   const {isLoading , data , isError , error , isFetching , refetch} = useQuery('superheroes',
    // () => {
    //     return axios.get('http://localhost:4000/superheroes')
         getBookData,
         {


            // staleTime: 30000, // default

            // refetchOnMount: false, 
            // refetchOnMount: true, // default  

            // refetchOnWindowFocus: false,
            // refetchOnWindowFocus: true,
            refetchOnWindowFocus: 'always',    // Always ignore the staleTime and always refetch on window focus


            //


            // refetchInterval: 5000, // default

            // enabled: false,

            // onError,
            // onSuccess,


            //Newbranch newreactquery

            

         })

console.log(data?.data)

  return (
    <div className="buylist">
      <input
        placeholder="Search book"
        type="text"
        className="search"
        onChange={(e)=> setQuery(e.target.value)}
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
            // .filter(function (posts:any) {
            //   return posts.college_name.toLowerCase() == "SKIT" && 
            //   // posts.uid != 14  && 
            //   (posts.title.toLowerCase().includes(query.toLowerCase()) || posts.branch.toLowerCase().includes(query) );
            // })
            // .slice(pagination.start, pagination.end)
            
            .filter((item:any)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
            .map((post:any) => (
              
              <Link to={`/buybookdetails/${post.id}`} className="link-styles">
                <Card key={post.id} post={post} />
              </Link>
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
