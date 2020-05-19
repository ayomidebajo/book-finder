import React, { useState } from "react";
// import PropTypes from 'prop-types'

const Header = ({ searchRecipes }) => {
  const [text, setText] = useState("");

  const clickHandler = (e) => {
    searchRecipes(text);
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="header--container">
      <div className="text--container">
        <h1 className="h1-text">Keep reading to improve your knowledge</h1>
        <span className="span-aside"></span>
        <p className="header--body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
          autem? Libero, sapiente! Dolor velit sed repudiandae, consequatur quod
          quia perspiciatis aliquid accusantium, voluptas sequi facilis
          laboriosam temporibus ipsam itaque natus.
        </p>
        <div className="input-field">
          <input
            type="text"
            placeholder="Find a book"
            value={text}
            onChange={onChange}
          />
          <button type="submit" onClick={clickHandler}>
            Submit
          </button>
          <p>{text}</p>
        </div>
      </div>
      <div className="header-image__container">
        <div className="image-aside"></div>
      </div>
    </div>
  );
};

// Header.propTypes = {

// }

export default Header;
