import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";

import Book from "./BookItem";

const Books = ({ books, loading }) => {
  // const [bookss, setBooks] = useState([]);
  // useEffect(() => {
  //   setBooks(books);
  //   // console.log(bookss);
  // }, []);

  const {
    items,
    kind,
    title,
    publishedDate,
    desxription,
    imageLinks,
    previewLink,
  } = books;

  if (loading) return <Spinner />;
  //   if (bookss.length > 0) {
  //     console.log(kind);
  //     console.log(items);
  //     console.log(title);
  //   } else {
  //     console.log("not ready");
  //   }
  console.log(books);

  // console.log(books.items.volumeInfo.title);

  return (
    <div className="grid-items">
      {Object.keys(books).map((item, i) => (
        <ul key={i}>
          <li className="grid">
            <p className="book-title">Title: {books[item].volumeInfo.title}</p>
            <p className="desc-text">
              Description: {books[item].volumeInfo.description}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
};

// {
//   books.map((item, i) => <Book books={item} key={i} />);
// }

export default Books;
