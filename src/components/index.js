import React from "react";
import Header from "./home/Header";
import Navbar from "./layout/Navbar";
import Books from "./books/Books";
import Footer from './layout/Footer';

const Index = ({ searchBooks, loading, books }) => {
  return (
    <div className="container">
      <Navbar />
      <Header searchBooks={searchBooks} loading={loading} />
      <Books books={books} loading={loading} />
      <Footer />
    </div>
  );
};

export default Index;
