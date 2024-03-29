import React from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { onChangeHandler, placeholder, className } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
