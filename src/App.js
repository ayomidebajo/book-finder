import React, { useState } from "react";
import "./styles/layout.scss";
import Index from "./components/index";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [bookres, setBookRes] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [singleBook, setSingleBook] = useState({});

  const apiKey = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const searchBooks = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&+inauthor&key=${apiKey}`
    );
    console.log(res.data.items);
    setBookRes(res.data.items);
    setLoading(false);
  };

  // const getBook = async (id) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://www.googleapis.com/books/v1/volumes?id=${id}&key=${apiKey}`
  //   );
  //   console.log(res.data.items);
  //   setBookRes(res.data.items);
  //   setLoading(false);
  // };

  return (
    <Router>
      <Route
        exact
        path="/"
        component={() => (
          <Index searchBooks={searchBooks} loading={loading} books={bookres} />
        )}
      />
    </Router>
  );
};

export default App;
