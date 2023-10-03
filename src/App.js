import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

import CarList from "./components/CarList";
import "./App.css";
import cars from "./cars.json";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [filteredCars, setFilteredCars] = useState(cars);

  //
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  //

  const handleSearch = (searchQuery) => {
    const filtered = cars.filter((car) =>
      car.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCars(filtered);
    //
    setCurrentPage(1);
    //
  };

  //
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    window.history.replaceState(null, "", `/page/${currentPage}`);
  }, [currentPage]);
  //

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <CarList
        cars={filteredCars.slice(
          (currentPage - 1) * carsPerPage,
          currentPage * carsPerPage
        )}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default App;
