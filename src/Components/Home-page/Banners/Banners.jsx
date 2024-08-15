import { useState, useEffect } from "react";
import "../../../App.css";
import PropTypes from "prop-types";

const Banners = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="sliding-banner-container">
      <div
        className="sliding-banner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="banner-image"
          />
        ))}
      </div>
    </div>
  );
};

Banners.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Banners;
