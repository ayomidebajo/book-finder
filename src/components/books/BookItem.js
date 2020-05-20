import React from "react";

const Book = ({ books }) => {
  console.log({ books });

  return (
    <div>
      <p>{books.title}</p>
    </div>
  );
};

export default Book;
