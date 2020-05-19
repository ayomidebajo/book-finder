import React from 'react'

const Book = ({book}) => {
  // const {
  //   items,
  //   kind,
  //   title,
  //   publishedDate,
  //   desxription,
  //   imageLinks,
  //   previewLink,
  // } = book;
  
  return (
    <div>
      <p>{book.title}</p>
    </div>
  )
}

export default Book;
