import React, { useState } from "react";
import styles from "./Navbar.module.css";

import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <FiSearch className={styles.searchIcon} />
        </button>
      </div>

      <p>
        {" "}
        Relevance <RiArrowDropDownLine className={styles.dropdownIcon} />
      </p>
      <p>
        {" "}
        All brands <RiArrowDropDownLine className={styles.dropdownIcon} />
      </p>
    </div>
  );
};

export default Navbar;
