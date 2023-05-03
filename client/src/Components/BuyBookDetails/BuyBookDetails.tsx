import React, { useEffect, useState } from "react";
// import Edit from "../img/edit.png";
// import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import Sidebar from "../../FixedComponents/Sidebar/Sidebar";

import "./BuyBookDetails.css"


const BuyBookDetail = () => {
  const [post, setPost] = useState<any>({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/addbook/${postId}`);
        setPost(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
//   console.log(post.branch + " bookdetails");
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${postId}`);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };



// const [posts, setPosts] = useState([]);

// const cat = useLocation().search
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`/carts/cart1`);
//       setPosts(res.data);
//       console.log(res.data)
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   fetchData();
// }, [cat]);


// const handleClickBuy = async (e) => {
//   e.preventDefault();
//   console.log(post.uid)
//   console.log("Main id")
//   let bookdetails={
    
//     postid:post.id,
//     uid:post.uid,

//     title:post.title,
//     desc:post.desc,
//     img:post.img,
//     mrp:post.mrp,
//     price:post.price,
//     collegeName:post.college_name,
//     sem:post.sem,
//     edition:post.edition,
//     buyerid:currentUser.id,
//     buyername:currentUser.name,
//     buyeremail:currentUser.email,
//     buyercollege:currentUser.college_name,
//     buyerphone:currentUser.phone,
//       }
//       console.log(bookdetails)
  
// }


// const handleClick1 = async (e) => {

//     e.preventDefault();
//     // const imgUrl = await upload();

//     if(!posts.find(o => (o.postid ==post.id&& o.uid == currentUser.id))){
//       var uid = currentUser.id;
//     var postid= post.id;
//     var title = post.title;
//     var desc = post.desc;
//     var mrp = post.mrp;
//     var price = post.price;
//     var collegeName = post.college_name;
//     var sem = post.sem;
//     var img =post.img;
//     var edition = post.edition;
    
//       try {
//       await axios.post(`/carts/cart`, {
//         postid,
//             uid,
//             title,
//             desc,
//             img,
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
      await axios.delete(`/addbook/${post.id}`);
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
            {/* <img src={`../upload/${post?.img}`} alt="Hii" id="img"/> */}


            {/* <div className="info">
              <h1 className="text-xl font-bold">{post.title}</h1>
              <div className="text-md">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.desc),
                  }}
                ></p>{" "}
              </div>
              <div className="font-bold mt-2">MRP : ₹ {post.mrp}</div>
              <div className="font-bold mt-2">Price : ₹ {post.price}</div>

              <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
                Add to cart
              </button>
              <div className="ic" onClick={handleDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                  <Link to={`/addbooks?edit=2`} state={post}>
                  <div className="ic">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
              </Link>
                  <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
            </div> */}

<div className="info">
              <h1 className="text-xl font-bold title">{post.title}</h1>
              
              <div className="">
                <div>
                {/* <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.desc),
                  }}
                ></p>{" "} */}
                </div>
              </div>
              <div className="font-bold mt-2 mrp">MRP : ₹ {post.mrp}</div>
              <div className="font-bold mt-2 price">Price : ₹ {post.price}</div>
              <div className="font-bold mt-2 price">Edition :  {post.edition}</div>




              <div className="cart">
              <button className="addCartButton " >
                BUY
              </button>
              <button className="addCartButton " >
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
                  {/* <Link to={`/addbooks?edit=2`} state={post}>
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
