import React, { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    console.log("render");
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
