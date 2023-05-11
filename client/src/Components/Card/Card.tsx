import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (books:any) => {
  const { book } = books;
  console.log(book.img)
  const getText = (html:any) :any =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };
  // return (
  //   <div className="col-md-4 mb-3 " key={book.id}>
  //   <div className="card">
  //     <div className="card-body">
  //       <div className="img">ImG</div>
  //       <h5>
  //         {book.title}
  //       </h5>
  //       <div>DESC : {getText(book.desc)} </div>
  //       <div>MRP : {book.mrp} Rs</div>
  //       <div>Price : {book.price} Rs</div>

  //       {/* <div>Selling Price :{book.SellingPrice} Rs</div> */}
  //     </div>
  //     <Link to="/buyinformation">
  //       <div id="x">

  //         <button className="btn btn-success buy-btn">Buy</button>
  //       </div>
  //     </Link>
  //   </div>
  // </div>
  // )

  var trimmedString = getText(book?.desc).substring(0, 20);

  return (
    <div className="card">
      <div className="card-header">
        {/* <img src="https://tinyurl.com/3h9wjwv5" alt="city" /> */}
        {/* <img src={`./uploads/${book?.img}`} alt = {`${book?.img}`} /> */}
        <img className="book-img" src={`../uploads/${book?.img}`} alt="Hii" />

        

      </div>
      <div className="card-body">
        {/* <span className="tag tag-pink">Design</span> */}
        <h6>{book?.title}</h6>
        <p>
          <div>DESC : {trimmedString}.. </div>
          {/* <hr/> */}
          <div>MRP : {book?.mrp} Rs</div>
        </p>
        {/* <div className="user"> */}
        {/* <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" /> */}
        {/* <div className="user-info"> */}

        
        <Link to="/buyinformation">
        <button className="btn "><span>₹ {book?.price}</span></button>
        </Link>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Card;
