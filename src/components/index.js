import React, { useState, useEffect } from "react";
import Header from "./home/Header";
import Navbar from "./layout/Navbar";
import Books from "./books/Books";

const Index = ({ searchRecipes }) => {
  return (
    <div className="container">
      <Navbar />
      <Header searchRecipes={searchRecipes} />
    </div>
  );
};

export default Index;
