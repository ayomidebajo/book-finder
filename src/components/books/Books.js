import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";

const Books = ({ books, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-container">
        {Object.keys(books).map((item, i) => (
          <ul key={i} className="grid-list">
            <li className="card-item">
              <p className="book-title">{books[item].volumeInfo.title}</p>
              <div className="sub-container">
                <img
                  src={books[item].volumeInfo.imageLinks.smallThumbnail}
                  alt="book"
                  width="105px"
                />
                <p>Date published: {books[item].volumeInfo.publishedDate}</p>

                <p>Author: {books[item].volumeInfo.authors}</p>

                <button className="btn-details" type="submit">
                  View more details
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};

// const clickHandler = (e) => {
//   console.log("clicked");

//   console.log(e.target.text);
// };

export default Books;
