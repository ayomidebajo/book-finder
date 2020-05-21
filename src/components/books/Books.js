import React from "react";
import Spinner from "../layout/Spinner";

const Books = ({ books, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-container">
        {Object.keys(books).map((item, i) => (
          <ul key={i} className="grid-list">
            <li className="card-container">
              <div className="card--item">
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
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};

export default Books;
