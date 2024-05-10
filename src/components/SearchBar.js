import React, { useState } from "react";
import "./Demo.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    onSearch(searchTerm);
    setSearchTerm(""); // Optional: Clear the search input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <span class="material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder="Search Betty's Memoir"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      {/* Button removed; form submission handled by pressing Enter */}
    </form>
  );
}

export default SearchBar;
