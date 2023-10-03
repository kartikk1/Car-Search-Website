import React from "react";
import styles from "./CarCard.module.css";

import { AiOutlineHeart } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { IoMdSpeedometer } from "react-icons/io";
import { PiSteeringWheelBold } from "react-icons/pi";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarCard = ({ car }) => {
  return (
    <div className={styles.card}>
      {/* <img src={car.Image} alt={car.Name} /> */}

      <div className={styles.imageContainer}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          showArrows={false}
          className={styles.caro}
          showStatus={false}
        >
          {car.Images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${car.Name} - Image ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.carModel}>
        <h3>{car.Name}</h3>
        <p>{car.Year}</p>
      </div>

      <div className={styles.descripton}>
        <p>
          <GoPeople className={styles.Icon} /> {car.Sitting} People
        </p>
        <p>
          <LuFuel className={styles.Icon} />
          {car.Fuel}
        </p>
        <p>
          <IoMdSpeedometer className={` ${styles.Icon} ${styles.wheelIcon}`} />
          {car.Mileage} km / 1-litre
        </p>
        <p>
          <PiSteeringWheelBold
            className={` ${styles.Icon} ${styles.wheelIcon}`}
          />
          {car.Drive}
        </p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.lastSection}>
        <div className={styles.lastSectionFirst}>
          <p className={styles.price}>${car.Price}</p>
          <p> / month</p>
        </div>
        <div className={styles.lastSectionSecond}>
          <p>
            <AiOutlineHeart className={styles.heart} />
          </p>
          <button>Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
