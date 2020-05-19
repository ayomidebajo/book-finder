import React, { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";

import Book from "./BookItem";

const Books = ({ books, loading }) => {
  const [bookss, setBooks] = useState([]);
  useEffect(() => {
    setBooks(books);
    // console.log(bookss);
  }, []);
 

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
    <div>
      <p>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </p>
    </div>
  );
};

export default Books;
