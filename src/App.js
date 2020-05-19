import React, { useState } from "react";
import "./styles/layout.scss";
import Index from "./components/index";
import axios from "axios";
import Books from "./components/books/Books";
import Book from "./components/books/BookItem";

const App = () => {
  const [bookres, setBookRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchRecipes = async (text) => {
    const apiKey = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&key=${apiKey}`
    );
    console.log(res.data.items);
    setBookRes(res.data.items);
    setLoading(false);
  };
  return (
    <div>
      <Index searchRecipes={searchRecipes} />
      <Books books={bookres} loading={loading} />
      {/* <Book /> */}
    </div>
  );
};

export default App;
