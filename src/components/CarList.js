import React from 'react';
import CarCard from './CarCard';
import styles from "./CarList.module.css";

const CarList = ({ cars }) => {
  return (
    <div className={styles.carlist}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
