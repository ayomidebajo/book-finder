import React, { useState } from "react";
import "./styles/layout.scss";
import Index from "./components/index";
import axios from "axios";
import Books from "./components/books/Books";

const App = () => {
  const [bookres, setBookRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchRecipes = async (text) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyDzwEFeGG7CiCanj7Fv1iz54Gt4iUstd10`
    );
    console.log(res);
    setBookRes(res.data);
    setLoading(false)
  };
  return (
    <div>
      <Index searchRecipes={searchRecipes} />
      <Books books={bookres} loading={loading}/>
    </div>
  );
};

export default App;
