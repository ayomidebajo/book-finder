import React from "react";

const Book = ({ books }) => {
  console.log({ books });

  // const {
  //   items,
  //   kind,
  //   volumeInfo,
  //   publishedDate,
  //   desxription,
  //   imageLinks,
  //   previewLink,
  // } = books;

  return (
    <div>
      <p>{books.title}</p>
    </div>
  );
};

export default Book;
