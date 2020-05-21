import React, { useState } from "react";
import "./styles/layout.scss";
import Index from "./components/index";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {

  let clientId;

  if (process.env.NODE_ENV !== "production") {
    clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  } else {
    clientId = process.env.GOOGLE_CLIENT_ID;
  }

  const [bookres, setBookRes] = useState([]);
  const [loading, setLoading] = useState(false);


 
  

  const searchBooks = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&+inauthor&key=${clientId}`
    );
    console.log(res.data.items);
    setBookRes(res.data.items);
    setLoading(false);
  };

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
